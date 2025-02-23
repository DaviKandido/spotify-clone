// JavaScript Assincrono
// await async

import { MongoClient } from "mongodb";


const URL = "mongodb+srv://davicandidopucminas:5ozNNKAnbd2Hd3cz@spotifycluster.jcwwt.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyCluster"

const client = new MongoClient(URL);

export const db  = client.db("SpotifyDataBase");


// console.log(db)