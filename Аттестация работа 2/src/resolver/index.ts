import 'dotenv/config'
import { Query } from "./Query/getChannel";
import { deleteChannel } from "./Mutation/deleteChannel";
import { sendMessage } from "./sendMessage";
import * as iType from "./interface";
import * as R from "ramda";
import { CreateChannel } from "./channel";
import API from '../api'
import {
  getDatabase,
  onChildAdded, push, ref, set
} from "firebase/database";
import modifySelect from "./helpers/modifySelect";

export const resolvers = {
  Query: {
    channel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
    ) => {
      const ctx = context?.req?.req?.headers?.authorization
      const variables = modifySelect(input, ctx)
      return await Query.currentChannel(variables);
    },
    appealChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
    ) => {
      const ctx = context?.req?.req?.headers?.authorization
      const variables = modifySelect(input, ctx)
      return await Query.currentChannel(variables);
    },
    adminChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
    ) => {
      const ctx = context?.req?.req?.headers?.authorization
      const variables = modifySelect(input, ctx)
      return await Query.currentChannel(variables);
    },
    garageChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
    ) => {
      const ctx = context?.req?.req?.headers?.authorization
      const variables = modifySelect(input, ctx)
      return await Query.currentChannel(variables);
    },
  },
  Mutation: {
    createChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
    ) => {
      const data: any = await CreateChannel(context, input)
      if (!data) return
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

        await set(newPostRef, R.reject(R.anyPass([R.isEmpty, R.isNil]))(data)).catch((error) => {
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
      const ctx: any = context?.req?.req?.headers?.authorization
      return sendMessage({ ...input, ctx });
    },
    deleteChannel: async (
      root: any,
      { input }: iType.iInput,
      context: any,
    ) => {
      const ctx = context?.req?.req?.headers?.authorization
      const profile=await API.CLIENT_CHECKER(ctx)
      if(profile?.profileId){
        return await deleteChannel({ idChannel: input?.idChannel });
      }
      throw new Error('User not denied')
    },
  },
};
