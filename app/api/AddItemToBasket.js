"use server";
import clientPromise from "./clientPromise";
import { getLatestBasket } from "./getLatestBasket";

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
    getLatestBasket();
  } catch (err) {
    console.error(err);
  }
}
