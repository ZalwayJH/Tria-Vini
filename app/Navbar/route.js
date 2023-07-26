"use server";
import { revalidatePath } from "next/cache";
import clientPromise from "../api/clientPromise";

export async function getBasketLength() {
  try {
    const client = await clientPromise;
    const db = await client
      .db("TriaVini")
      .collection("Users")
      .findOne({ name: "Joel Haughton" });
    const basketLength = await db.basket.length;

    return basketLength;
  } catch (err) {
    console.error(err);
  }
}
