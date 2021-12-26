import * as R from "ramda";
import { GARAGES_ZENCAR } from "../request/schema";
import { GraphQLClient } from "graphql-request";
import { endpoint } from "./index";


export const GaragesMount = async ({ workshop, custom }: any) => {
  const client = new GraphQLClient(endpoint, { headers: {} });

  let input: any = {};
  if (custom?.status) {
    input = R.assocPath(["status", "eq"], custom)(input);
  }
  if (!R.isEmpty(workshop?.id)) {
    input = R.assocPath(["id", "in"], workshop)(input);
  }
  const request = await client.request(GARAGES_ZENCAR, {
    where: input,
    paginate: { page: 1, limit: 0 }
  });
  let garages: any[] = [];
  let members: any[] = [];


  request?.garages?.items?.forEach((x: any) => {
    x?.employees?.map((x: any) => members.push({ id: x?.id.toString(), ...x }));
    garages.push({
      id: x?.id || "",
      name: x?.name || "",
      address: R.values([...x?.address]).join(" "),
      phone: x?.phone || "",
    });
  });

  return { workshop: garages, members };
};
