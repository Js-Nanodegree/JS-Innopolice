import { Query } from "../Query/getChannel";
import * as R from "ramda";
import { getDatabase, push, ref, set } from "firebase/database";
import Api from '../../api'

interface iMessage {
  message: string;
  sharedMessage?: {
    id?: string,
    message?: string
  };
  idChannel: string;
  ctx?: any;
}

export const sendMessage = async ({ message, sharedMessage, idChannel, ctx }: iMessage) => {
  const checkProfile: any = await Api.CLIENT_CHECKER(ctx)
  const profile: any = await Query.profileChannel({ idChannel });

  if (!profile?.idChannel) {
    throw new Error("idChannel not Found");
  }

  const sendMessage = {
    ...R.pipe(R.omit(["members", "workshop"]))(profile),
    message,
    sharedMessage,
    write: checkProfile?.profileId,
    createdAt: Date.now(),
    read: false
  };

  return new Promise(async (resolve, reject) => {
    try {
      const db = getDatabase();
      const commentsRef = ref(db, process.env.ROUTE_MESSAGE);
      const newPostRef = push(commentsRef);
      await set(newPostRef, sendMessage).then(() => resolve('ok')).catch((error) => {
        reject(error);
      });
    } catch (e: any) {
      throw new Error("Firebase not Work")
    }
  });
};
