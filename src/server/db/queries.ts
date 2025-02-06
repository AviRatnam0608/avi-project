import "server-only";
import { db } from "../db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const { userId } = auth();

  if (!userId) {
    return [];
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, userId),
    orderBy: (model, { desc }) => desc(model.id), // orderBy takes a model and a helper obj
  });
  return images;
}
