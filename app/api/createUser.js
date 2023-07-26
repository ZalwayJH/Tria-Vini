"use server";
import clientPromise from "./clientPromise";
// import { MongoClient } from "mongodb";
// require("dotenv").config();
// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri);
async function createUser(name, email) {
  // await client.connect();
  try {
    const client = await clientPromise;
    const db = client.db("insertDB").collection("users");
    const doc = {
      name: name,
      email: email,
    };
    await db.insertOne(doc);
  } catch (e) {
    console.error(e);
  }
}

export default createUser;
// export default async (req, res) => {
//   try {
//     const db = await clientPromise();
//     const users = await db.collection('users').find({}).limit(20).toArray();
//     res.json(users);
//   } catch (e) {
//     console.error(e);
//     res.json({ error: 'Not connected!' });
//   }
// };
// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri);

// export async function insertDocument() {
//   try {
//     const database = client.db("insertDB").collection("users");
//     // create a document to insert
//     const doc = {
//       title: "frred",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     };
//     const result = await database.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }

// async function findDocument() {
//   try {
//     const database = client.db("insertDB");
//     const haiku = database.collection("haiku");
//     const doc = {
//       title: "goddaaayumn",
//       content: "bytes = problem.",
//     };
//     const result = haiku.find();
//     for await (const file of result) {
//       console.dir(file);
//     }
//     // console.log(`a document has been added with the id ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// findDocument().catch(console.dir);

// const { ServerApiVersion, MongoClient } = require("mongodb");

// const username = encodeURIComponent("joelhaughton94");
// const password = encodeURIComponent("1oz5DtRJQhxpLabR");

// const uri = `mongodb+srv://${username}:${password}@winecluster0.pc7yttt.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     const dbo = Db.db("sample_airbnb");
//     dbo.collections("users").insertOne({ name: "joel" }, (err, db) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log("document inserted");
//       db.close();
//     });
//     console.log(
//       "pinged your deployment. you succesfully connection to mongoDb"
//     );
//   } finally {
//     client.close;
//     console.log("closed");
//   }
// }
// run().catch(console.dir);
