import { Query } from "./Query/getChannel";
import { deleteChannel } from "./Mutation/deleteChannel";
import { createChannel } from "./Mutation/createChannel";
import { sendMessage } from "./sendMessage";
import * as iType from "./interface";
import * as R from "ramda";
import { CLIENT, GARAGES_ZENCAR } from "../request/schema";
import { request, GraphQLClient } from "graphql-request";
const endpoint = process.env.ZENCAR || "";
import { CreateChannel } from "./channel";
import {
  getDatabase,
  onChildAdded, push, ref, set
} from "firebase/database";


export const requestShedule = async (context: any, input: any) => {
  try {
    const client = new GraphQLClient(endpoint, {
      headers: { authorization: context?.req?.req?.headers?.authorization },
    });
    const request = await client.request(CLIENT);

    console.log(request)

    const data = {
      profileId: request.profile?.id,
      members: [request.profile, ...input.members],
      typename: request.profile.__typename
    };

    return data;
  } catch (e) {
    return null
  }
};

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


export const resolvers = {
  Query: {
    channel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data = await requestShedule(context, input);

      return await Query.currentChannel({ ...input, ...data });
    },
    appealChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data = await requestShedule(context, input);
      return await Query.currentChannel({ ...input, ...data });
    },
    adminChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data = await requestShedule(context, input);

      return await Query.currentChannel({ ...input, ...data });
    },
    garageChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data = await requestShedule(context, input);

      return await Query.currentChannel({ ...input, ...data });
    },
  },
  Mutation: {
    createChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data: any = await CreateChannel(context, input)
      console.log(data)
      if(!data) return
      return new Promise(async (resolve, reject) => {
        const db = getDatabase();
        const commentsRef = ref(db, process.env.ROUTE_CHANNEL);

        if (R.isNil(data)) {
          resolve({})
        }

        const newPostRef = push(commentsRef);
        onChildAdded(commentsRef, (elem) => {
          if (elem?.val()?.idChannel) {
            resolve({ ...elem.val(), uuid: elem.key });
          }
        });

        await set(newPostRef, R.reject(R.anyPass([R.isEmpty,R.isNil]))(data)).catch((error) => {
          reject(error);
        });
      });
    },
    sendMessage: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data: any = await requestShedule(context, input);

      return sendMessage({ ...input, ...data, write: data?.clientId });
    },
    deleteChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
      info: any
    ) => {
      const data = await requestShedule(context, input);

      return await deleteChannel({ ...input, ...data });
    },
  },
};
