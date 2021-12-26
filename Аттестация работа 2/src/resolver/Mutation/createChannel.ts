import {
  getDatabase,
  onChildAdded, push, ref, set
} from "firebase/database";
import * as R from "ramda";
import * as iType from "../interface";
import { workspaceSelect } from "../helpers";
import { isAPPEAL, isADMIN, isGARAGE, isCLIENT } from "../helpers/isCheck";


interface iCreate {
  where?: any;
  workspaceType:iType.ENUM_TYPE;
  client?: iType.iClient;
  appeal?: number;
  workshop?: iType.iWorkShopInput[];
  members: any[];
}

export async function createChannel(input:iCreate,ctx:any) {
  if (!R.anyPass(isAPPEAL)) {
    throw new Error(`EXAMPLE {
      where: {},
      workspaceType: ENUM_TYPE,
      client: {},
      appeal: "",
      workshop: [{}],
      members: [{}],
    }`)
  }
  if (!R.anyPass(isADMIN)) {
    throw new Error(`EXAMPLE {
      workspaceType: ENUM_TYPE,
      client: {},
      members: [{}],
    }`)
  }
  if (!R.anyPass(isGARAGE)) {
    throw new Error(`EXAMPLE {
      where: {},
      workspaceType: ENUM_TYPE,
      workshop: [{}],
      members: [{}],
    }`)
  }
  if (!R.anyPass(isCLIENT)) {
    throw new Error(`EXAMPLE {
      where: {},
      workspaceType: ENUM_TYPE,
      workshop: [{}],
      members: [{}],
      client: {},
    }`)
  }
  const responseData:any =await workspaceSelect(input,ctx)

  if (R.anyPass([R.isEmpty,R.isNil])(responseData)) {
    throw new Error('params create not valid');
  }

  return new Promise(async (resolve, reject) => {
    const db = getDatabase();
    const commentsRef = ref(db, process.env.ROUTE_CHANNEL);
    const newPostRef = push(commentsRef);
    onChildAdded(commentsRef, (data) => {
      if (data?.val()?.idChannel) {
        resolve({ ...data.val(), uuid: data.key });
      }
    });

    await set(newPostRef, responseData).catch((error) => {
      reject(error);
    });
  });
}
