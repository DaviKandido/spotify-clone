import React from 'react'
import ItemList from '../ItemList/ItemList'
import { artistArray } from '../../../../assets/database/artists.js'
import { songsArray } from '../../../../assets/database/songs.js'


export default function Main() {

  
  return (
  <div className="main">

  {/* Item List de Artistas*/}
    <ItemList
      title={"Artistas populares"}
      items={5}
      itemsArray={artistArray}
      path={"/artists"}
      idPath={"/artist"}
    />

  {/* Item List de musicas*/}    
    <ItemList
      title={"Músicas populares"}
      items={14}
      itemsArray={songsArray}
      path={"/songs"}
      idPath={"/song"}
    />

  </div>
  )
}

