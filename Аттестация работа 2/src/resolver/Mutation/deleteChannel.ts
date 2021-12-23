import { getDatabase, ref, remove } from "firebase/database";

export async function deleteChannel({ channel }: any) {
  const db = getDatabase();
  const commentsRef = ref(db, [process.env.ROUTE_CHANNEL, '/', channel].join(''));
  await remove(commentsRef);
  return;
}
