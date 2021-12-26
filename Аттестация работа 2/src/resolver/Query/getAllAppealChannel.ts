import * as iType from "../interface";
import { searchRefChannel } from "./getChannel";
import { resultString } from "../helpers/resultString";

export async function getAllAppealChannel({ appeal, client, workshop, workspaceType }: any) {
  if (workspaceType === iType.ENUM_TYPE.APPEAL && appeal) {
    const commentsRef = searchRefChannel(
      "appealId",
      appeal,
      process.env.ROUTE_CHANNEL||""
    );
    return resultString(commentsRef)
  }
  if (workspaceType === iType.ENUM_TYPE.CLIENT && client?.id) {
    const commentsRef = searchRefChannel(
      'clientId',
      client?.id,
      process.env.ROUTE_CHANNEL||""
    );
    return resultString(commentsRef)
  }
  if (workspaceType === iType.ENUM_TYPE.GARAGE && workshop?.[0]?.id) {
    const commentsRef = searchRefChannel(
      `workshop_${workshop[0].id}`,
      true,
      process.env.ROUTE_CHANNEL||""
    );
    return resultString(commentsRef)
  }
  throw new Error('params not this valid');
}
