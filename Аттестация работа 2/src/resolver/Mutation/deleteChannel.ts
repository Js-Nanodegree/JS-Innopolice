import { getDatabase, ref, remove } from "firebase/database";

export async function deleteChannel({ idChannel }: any) {
  const db = getDatabase();
  const commentsRef = ref(db, [process.env.ROUTE_CHANNEL, '/', idChannel].join(''));
  await remove(commentsRef);
  return;
}
