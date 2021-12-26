import API from "../../api";
import * as R from "ramda";

 const modifySelect = async (input: any, ctx: any) => {
  let profile = { ...input, members: input.members || [] };
  try {
    if (input?.client?.uuid?.id) {
      profile = R.assocPath(
        ["client_" + input.client.uuid.id],
        true
      )(profile);
      profile.members?.push(input.client?.uuid);
    }
    const data = await API.CLIENT_CHECKER(ctx);
    if (data?.profileId) {
      profile = R.assocPath(
        ["client_" + data?.profileId],
        true
      )(profile);
      profile.members?.push(data?.members);
    }
    return R.omit(["client"])(profile);
  } catch (e) {
    let profile = { ...input, members: [] };

    if (input?.client?.uuid?.id) {
      profile = R.assocPath(
        ["client_" + input.client.uuid.id],
        true
      )(profile);
      profile.members?.push(input.client?.uuid);
      return R.omit(["client"])(profile);
    }

    throw new Error('User not denied');
  }
};

export default modifySelect