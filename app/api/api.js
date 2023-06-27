const { MongoClient } = require("mongodb");
require("dotenv").config();
const myName = process.env.USERNAME;
const myPass = process.env.PASSWORD;
const username = encodeURIComponent(myName);
const password = encodeURIComponent(myPass);
const uri = `mongodb+srv://${username}:${password}@winecluster0.pc7yttt.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function insertDocument(wine) {
  try {
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: wine,
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
insertDocument().catch(console.dir);

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
