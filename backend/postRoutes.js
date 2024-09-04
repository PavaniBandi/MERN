const express = require("express");
const database = require("./connect");
const { ObjectId } = require("mongodb");

let postRoutes = express.Router();

// RetrieveAll
//localhost:3000/posts
postRoutes.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();

  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data");
  }
});

//RetrieveOne
//localhost:3000/posts/12345
postRoutes.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(request.params.id) });

  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data");
  }
});

//CreateOne
postRoutes.route("/posts").post(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    title: request.body.title,
    description: request.body.description,
    author: request.body.author,
    date: request.body.date,
  };
  let data = await db.collection("posts").insertOne(mongoObject);
  response.json(data);
});

//UpdateOne
postRoutes.route("/posts/:id").put(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      title: request.body.title,
      description: request.body.description,
      author: request.body.author,
      date: request.body.date,
    },
  };
  let data = await db
    .collection("posts")
    .updateOne({ _id: new ObjectId(request.params.id) }, mongoObject);
  response.json(data);
});

//Delete One
postRoutes.route("/posts/:id").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .deleteOne({ _id: new ObjectId(request.params.id) });
  response.json(data);
});

module.exports = postRoutes;
