"use client"
import { useState } from "react";
import SongItem from "./SongItem";

export default function SongList({songsArray}: any) {

  const [items, setItems] = useState(5)





  return (
    <div className="song-list">

      {
        songsArray.filter((song, index) => index < items).map((song, index) => (
          <SongItem
            key={index}
            index={index}
            {...song}
          />
        ))
      }

      <p onClick={()=>  setItems(items + 5)}>
        Ver mais
      </p>

    </div>
  )
}
