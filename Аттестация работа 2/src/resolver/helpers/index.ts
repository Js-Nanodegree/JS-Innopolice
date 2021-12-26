import * as R from "ramda";
import uuid from "uuid-random";
import * as iType from "../interface";
import { ENUM_TYPE, iWorkShopInput, iClient } from "../interface";
import API from '../../api';
const isOdd = R.pipe(
  R.reject(R.anyPass([R.isEmpty, R.isNil, R.pipe((x) => x === false)]))
);

interface iCreate {
  where?: any;
  workspaceType: ENUM_TYPE;
  client?: iClient;
  appeal?: number;
  workshop?: iWorkShopInput[];
  members: any[];
}


export const workspaceSelect = async (input: iCreate, ctx: any) => {
  let data: any = {
    idChannel: uuid(),
    createdAt: Date.now(),
    workshop: [],
    members: [],
    workspaceType: input.workspaceType
  };

  if (!R.equals(input.workspaceType, iType.ENUM_TYPE.ADMIN)) {
    input.workshop?.forEach((x) => {
      data = R.assocPath(["workshop_" + x?.id], true)(data);
    });
  }

  if (!R.equals(input.workspaceType, iType.ENUM_TYPE.ADMIN)) {
    let idWorkShop: any = []
    input?.workshop?.forEach((x) => {
      idWorkShop.push(x?.id)
    })

    const request: any = await API.WORKSHOP_LIST({ id: { in: idWorkShop } }, ctx);
    data = Object.assign(data, request)
  }
  if (R.equals(input.workspaceType, iType.ENUM_TYPE.ADMIN)) {
    data = R.assocPath(["admin"], true)(data);
  }
  if (R.equals(input.workspaceType, iType.ENUM_TYPE.APPEAL)) {
    data = R.assocPath(["appealId"], input.appeal)(data);
  }

  if (!R.includes(input.workspaceType, [iType.ENUM_TYPE.GARAGE])) {
    await API.CLIENT_CHECKER(ctx).then((clientProfile: any) => {
      data = R.assocPath(["clientId"], clientProfile?.profileId)(data);
      data.members.push(
        isOdd(clientProfile?.members)
      );
    }).catch(() => {
      data = R.assocPath(["clientId"], input?.client?.id)(data);
      data.members.push(
        isOdd({
          id: input?.client?.id,
          name: input?.client?.name,
          phone: input?.client?.phone,
        })
      );
    });
  }

  return isOdd(data);
};
