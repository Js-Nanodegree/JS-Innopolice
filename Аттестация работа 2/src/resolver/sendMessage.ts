import { Query } from "./Query/getChannel";
import * as R from "ramda";
import { getDatabase, push, ref, set } from "firebase/database";


export const sendMessage = async ({ message, sharedMessage, write, channel }: any) => {
  const profile:any = await Query.profileChannel({ channel });
  const sendMessage = {
    ...R.pipe(R.omit(["members", "workshop"]))(profile),
    message,
    sharedMessage,
    write,
    createdAt: Date.now(),
    read:false
  };

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    const commentsRef = ref(db, process.env.ROUTE_MESSAGE);
    if (R.isEmpty(sendMessage)) {
      throw new Error("params not valid");
    }
    const newPostRef = push(commentsRef);
    await set(newPostRef, sendMessage).then(()=>resolve('ok')).catch((error) => {
      reject(error);
    });
  });
};
