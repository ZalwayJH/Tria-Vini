"use server";
import clientPromise from "./api/clientPromise";

import { revalidatePath } from "next/cache";
import { getBasketLength } from "./api/getWineList";

export async function addItemToBasket(item) {
  try {
    const client = await clientPromise;
    const db = client.db("TriaVini").collection("Users");

    const numInBasket = await client
      .db("TriaVini")
      .collection("Users")
      .findOne({ name: "Joel Haughton" });
    const basketLength = await numInBasket.basket.length;
    const basketIndex = "basket." + basketLength;

    await db.updateOne(
      { name: "Joel Haughton" },
      { $set: { [basketIndex]: item } }
    );
    getBasketLength();
    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
}
