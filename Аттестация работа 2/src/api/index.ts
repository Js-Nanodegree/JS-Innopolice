import { GraphQLClient } from "graphql-request";
import { GARAGES_ZEN_CAR, CLIENT } from './schema'
import * as R from 'ramda'

const ENDPOINT = process.env.ZEN_CAR_ENDPOINT || "https://zencar-backend-dev.dev.zen.car/graphql"

export default {
  async WORKSHOP_LIST(input: any, headers: any) {
    try {
      const graphClient = new GraphQLClient(ENDPOINT, { headers });
      let workshop: any[] = [];
      let members: any[] = [];
      const request:any = await graphClient.request(GARAGES_ZEN_CAR, {
        where: input,
        paginate: { page: 1, limit: 0 }
      })

      request?.garages?.items?.forEach((x: any) => {
        x?.employees?.map((x: any) => members.push({ id: x?.id.toString(), ...x }));
        const address = R.pipe(R.path(['address']), (x: any) => Object.values(x), R.anyPass([R.isEmpty, R.isNil]))(x)
        workshop.push({
          id: x?.id || "",
          name: x?.name || "",
          address,
          phone: x?.phone || "",
        });
      });

      return { workshop, members };
    } catch (e: any) {
      throw new Error("Error:GRAPHQL")
    }
  },
  async CLIENT_CHECKER(headers: any) {
    const graphClient = new GraphQLClient(ENDPOINT, { headers });

    try {
      const request = await graphClient.request(CLIENT);
      return {
        profileId: request.profile?.id,
        members: request.profile,
        typename: request.profile.__typename
      }
    } catch (e: any) {
      throw new Error("Error:GRAPHQL")
    }
  }
}