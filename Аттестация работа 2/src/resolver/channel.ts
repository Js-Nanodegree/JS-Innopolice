import * as R from "ramda";
import uuid from "uuid-random";
import { GaragesMount } from "./GaragesMount";

export const CreateChannel = async (context: any, input: any) => {
  // const auth: any = await requestShedule(context, input);

  // if (auth) {
  //   const { workshop, members }: any = await GaragesMount({ workshop: input?.workshop });
  //   if (input.workspaceType === "GARAGE" && auth.typename !== "Client") {
  //     const data = input.workshop?.reduce((cum: any, old: any) => ({ [`workshop_${old}`]: true, ...cum }), {
  //       idChannel: uuid(),
  //       createdAt: +new Date(),
  //       workspaceType: input.workspaceType,
  //       workshop,
  //       members: R.reject(R.anyPass([R.isEmpty, R.isNil]))([...auth.members, ...members, ...input.members]),
  //     });
  //     return data;
  //   }
  //   if (input.workspaceType === "APPEAL" && input.appealId && auth.typename === 'Client') {
  //     const data = input.workshop?.reduce((cum: any, old: any) => ({ [`workshop_${old}`]: true, ...cum }), {
  //       idChannel: uuid(),
  //       createdAt: +new Date(),
  //       workspaceType: input?.workspaceType,
  //       workshop,
  //       clientId: auth.profileId.toString(),
  //       uuidClient: input?.uuid,
  //       appealId: input?.appealId,
  //       members: R.reject(R.anyPass([R.isEmpty, R.isNil]))([auth.profile, ...members, ...input.members]),
  //     });

  //     return data;

  //   }
  //   if (input.workspaceType === "ADMIN" && auth.typename === "Client") {
  //     const data = {
  //       idChannel: uuid(),
  //       createdAt: +new Date(),
  //       clientId: auth.profileId.toString(),
  //       uuidClient: input.uuid,
  //       admin: true,
  //       members: R.reject(R.anyPass([R.isEmpty, R.isNil]))([auth.profile, ...members, ...input.members]),
  //     };
  //     return data;
  //   }
  // } else {
  //   if (input.workspaceType === "ADMIN" && input.members?.length > 0 && input.uuid) {
  //     const data = {
  //       idChannel: uuid(),
  //       createdAt: +new Date(),
  //       client: input.client,
  //       uuidClient: input.uuid,
  //       [input.custom || 'admin']: true,
  //       members: R.reject(R.anyPass([R.isEmpty, R.isNil]))([auth?.profile, ...input.members]),
  //     };
  //     return data;
  //   }
  // }
};
