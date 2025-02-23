"use client";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SongList from "./_components/SongList";
import { useParams } from "next/navigation";
import { artistArray } from '@/assets/database/artists'
import { songsArray } from '@/assets/database/songs'

export default function Artist() {

  const params = useParams();
  const { id } = params; 

  const artistObj = artistArray.filter((artist) => artist._id === id)[0];

  const SongsArrayFromArtist = songsArray.filter((song) => song.artist === artistObj.name);

  const randomIndex= Math.floor(Math.random() * SongsArrayFromArtist.length -1);

  const randomIdSongArtist = SongsArrayFromArtist[randomIndex]._id;

  return (
    <main className="max-w-[80vw] ml-[20em]">


      <div className="artist" >
        <div 
          className="artist__header"
          style={{
            backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
          }}
        >

          <h2>{artistObj.name}</h2>
        </div>
      
        <div className="artist__body">
          <h2>Populares</h2>

          <div className="song-list">
            <SongList
              songsArray={SongsArrayFromArtist}
            />
          </div>
        </div>

        <Link href={`/song/${randomIdSongArtist}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        
        </Link>
      </div>



    </main>
  );
}
