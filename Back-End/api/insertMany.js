import { songsArray } from "../database/songs.js"
import { artistArray } from "../database/artists.js"
import { db } from "./connect.js"

const newArtistArray = artistArray.map(artist => {
  const newArtistObj = {...artist}
  delete newArtistObj.id
  return newArtistObj
})
const newSongsArray = songsArray.map(songs => {
  const newSongsObj = {...songs}
  delete newSongsObj.id
  return newSongsObj
})

db.collection("artists").insertMany(newArtistArray)
db.collection("songs").insertMany(newSongsArray)