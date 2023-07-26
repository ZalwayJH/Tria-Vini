"use server";
import clientPromise from "./clientPromise";

export async function getLatestBasket() {
  try {
    const client = await clientPromise;
    const numInBasket = await client
      .db("TriaVini")
      .collection("Users")
      .findOne({ name: "Joel Haughton" });
    const basketLength = await numInBasket.basket.length;

    return basketLength;
  } catch (err) {
    console.error(err);
  }
}
