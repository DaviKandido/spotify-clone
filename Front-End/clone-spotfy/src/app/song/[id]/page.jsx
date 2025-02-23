"use client";
import React, { Suspense } from "react";
import Player from "./_components/Player";
import Link from "next/link";
import { useParams } from "next/navigation";
import { songsArray } from "@/assets/database/songs";
import { artistArray } from "@/assets/database/artists";

export default function Song() {

    const params = useParams();
    const { id } = params; 

    const song = songsArray.filter((song) => song._id === id)[0]; 

    const artistObj = artistArray.filter((artist) => artist.name === song.artist)[0];

    const songsArrayFromArtist = songsArray.filter((song) => song.artist === artistObj.name);

    const randomIndex= Math.floor(Math.random() * songsArrayFromArtist.length -1);
    const randomIndex2= Math.floor(Math.random() * songsArrayFromArtist.length -1);

    const randomIdSongArtist = songsArrayFromArtist[randomIndex]._id;
    const randomId2SongArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <main className="max-w-[80vw] ml-[20em]">
      <div className="song">
        <div className="song__container">
          <div className="song__image-container">
            <img
              src={song.image}
              alt={`imagem da musica ${song.name}`}
            />
          </div>
        </div>

        <div className="song__bar">
          <Link href={`/artist/${artistObj._id}`} className="song__artist_image">
            <img
              width={75}
              height={75}
              src={artistObj.image}
              alt={`Imagem do Artista ${artistObj.name}`}
            />
          </Link>



            <Player 
              duration={song.duration}
              randomIdSongArtist={randomIdSongArtist}
              randomId2SongArtist={randomId2SongArtist}
              song={song}
            />


          <div>
            <p className="song__name">{song.name}</p>
            <p>{song.artist}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
