//Api significa Application Programming Interface
import express from "express"
import { ObjectId } from "mongodb";

import { db } from "./connect.js"
import cors from "cors"

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Só vamos trabalhas com os endpoints '/artists' e '/songs' ")
})

app.get("/artists", async (req, res) => {
  const data = await db.collection("artists").find({}).toArray()
  console.log(data)
  res.status(200).send(data)
})


app.get("/songs", async(req, res) => {
  const data = await db.collection("songs").find({}).toArray()
  console.log(data)
  res.status(200).send(data)
})


app.get("/song/:id", async(req, res) => {
  const id = req.params.id
  const data = await db.collection("songs").findOne({
    _id: new ObjectId(id)
  });


  console.log(data)
  res.status(200).send(data)
})

export { app }