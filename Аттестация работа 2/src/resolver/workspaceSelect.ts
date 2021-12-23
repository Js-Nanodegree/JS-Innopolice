import * as R from "ramda";
import uuid from "uuid-random";
import * as iType from "./interface";
import { ENUM_TYPE, iWorkShopInput, iClient } from './interface'
import request from '../request'
const isOdd = R.pipe(
  R.reject(R.anyPass([R.isEmpty, R.isNil, R.pipe((x) => x === false)]))
);

interface iCreate {
  where?: any;
  workspaceType: ENUM_TYPE;
  client?: iClient;
  appeal?: number;
  workshop?: iWorkShopInput[];
  members: any[]
}

interface iRequest{
  workshop?:any[];
  members?:any;
}

export const workspaceSelect = async (input: iCreate) => {
  const requestData:iRequest = {workshop:[], members:[]}
  const workshopId:any[] = (requestData?.workshop || []).reduce(
    (old: any, item: iType.iWorkShopInput) => {
      if (!iType.ENUM_TYPE.ADMIN) return {}
      return ({
        ...old,
        ...{ [`workshop_${item?.id}`]: true },
      })
    },
    {}
  );

  const data = {
    idChannel: uuid(),
    createdAt: Date.now(),
    workshop: requestData.workshop,
    workspaceType: input.workspaceType,
    members: R.pipe(R.uniq,R.reject(R.isEmpty))([...requestData?.members, ...(input?.members||[])]),
    clientId:
      input.workspaceType !== iType.ENUM_TYPE.GARAGE && input?.client?.id,
    appealId: iType.ENUM_TYPE.APPEAL === input.workspaceType ? input.appeal : false,
    admin: iType.ENUM_TYPE.ADMIN === input.workspaceType,
    ...workshopId,

  };

  return isOdd(data);
};
