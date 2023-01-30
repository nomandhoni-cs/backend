const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { selectors } = require('./selectors');
// MongoDB
const uri = "mongodb+srv://backend:cn4vo1IMCQnyN5D0@cluster0.edfalsu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// Express
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MongoDB

client.connect(err => {
  const collection = client.db("formdb").collection("selectors");
  // perform actions on the collection object
  collection.insertMany(selectors, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    });

  console.log("Connected to MongoDB");

//   client.close();
});


app.listen(port);