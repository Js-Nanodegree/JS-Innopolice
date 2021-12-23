import {
  getDatabase,
  onChildAdded, push, ref, set
} from "firebase/database";
import * as R from "ramda";
import * as iType from "../interface";
import { workspaceSelect } from "../workspaceSelect";


export async function createChannel({ client, appeal, workshop, workspaceType, members, workShopInput }: iType.iMessage) {
  let data:any={idChannel:null};
  if (workspaceType === iType.ENUM_TYPE.APPEAL && appeal && client?.id && !R.isEmpty(workshop) && !R.isEmpty(members)) {
    data =await workspaceSelect({ client, appeal, workshop, workspaceType, members, where: { ...workShopInput } });
  }
  if (workspaceType === iType.ENUM_TYPE.ADMIN && client?.id && !R.isEmpty(members)) {
    data = await workspaceSelect({ client, appeal, workshop, workspaceType, members, where: { ...workShopInput } });
  }
  if (workspaceType === iType.ENUM_TYPE.GARAGE && !R.isEmpty(workshop) && !R.isEmpty(members)) {
    data = await workspaceSelect({ client, appeal, workshop, workspaceType, members, where: { ...workShopInput } });
  }
  if (workspaceType === iType.ENUM_TYPE.CLIENT && !R.isEmpty(workshop) && !R.isEmpty(workshop) && client?.id) {
    data = await workspaceSelect({ client, appeal, workshop, workspaceType, members, where: { ...workShopInput } });
  }
  if (!data) {
    throw new Error('params create not valid');
  }

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    const commentsRef = ref(db, process.env.ROUTE_CHANNEL);

    if (R.isEmpty(data)) {
      throw new Error('params not valid');
    }

    const newPostRef = push(commentsRef);
    onChildAdded(commentsRef, (data) => {
      if (data?.val()?.idChannel) {
        resolve({ ...data.val(), uuid: data.key });
      }
    });

    await set(newPostRef, data).catch((error) => {
      reject(error);
    });
  });
}
