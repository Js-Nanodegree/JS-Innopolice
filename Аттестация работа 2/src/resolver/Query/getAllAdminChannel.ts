import * as iType from "../interface";
import { searchRefChannel } from "./getChannel";
import { resultString } from "../helpers/resultString";

export async function getAllAdminChannel({ client, workspaceType=iType.ENUM_TYPE.ADMIN }: iType.iMessage) {
  if (!client?.id) {
    throw new Error('params not valid');
  }

  if (![iType.ENUM_TYPE.CLIENT, iType.ENUM_TYPE.ADMIN].includes(workspaceType)) {
    throw new Error('workspaceType not valid');
  }

  let commentsRef = searchRefChannel(
    "clientId",
    client.id,
    process.env.ROUTE_CHANNEL||""
  );

  if (workspaceType === iType.ENUM_TYPE.ADMIN) {
    commentsRef = searchRefChannel(
      "admin",
      true,
      process.env.ROUTE_CHANNEL||""
    );
  }
  return resultString(commentsRef)
}
