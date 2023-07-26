"use server";
import clientPromise from "../api/clientPromise";
import { getBasket } from "../Navbar/navbar sub components/NavList";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export default async function getWineList() {
  try {
    const client = await clientPromise;
    const db = client.db("TriaVini").collection("Wines");

    const res = await db.find({});
    const wineList = await res.toArray();
    return JSON.parse(JSON.stringify(wineList));
  } catch (err) {
    console.error(err);
  }
}

// export default async function getWineList(search) {
//   try {
//     await client.connect();
//     const db = client.db("TriaVini").collection("Wines");
//     let query = {};
//     if (search) {
//       query = { wineName: search };
//     }
//     const res = await db.find(query).toArray();
//     const wineList = await [...res];
//     return JSON.parse(JSON.stringify(wineList));
//   } finally {
//     await client.close();
//   }
// }

export async function getBasketLength() {
  try {
    await client.connect();
    const db = await client
      .db("TriaVini")
      .collection("Users")
      .findOne({ name: "Joel Haughton" });
    const basketLength = await db.basket.length;

    return basketLength;
  } finally {
    await client.close();
  }
}

export async function addItemToBasket(item) {
  try {
    await client.connect();
    const db = client.db("TriaVini").collection("Users");

    const user = await client
      .db("TriaVini")
      .collection("Users")
      .findOne({ name: "Joel Haughton" });
    const basketLength = await user.basket.length;
    const basketIndex = "basket." + basketLength;

    await db.updateOne(
      { name: "Joel Haughton" },
      { $set: { [basketIndex]: item } }
    );
    getBasketLength();
  } finally {
    await client.close();
  }
}
