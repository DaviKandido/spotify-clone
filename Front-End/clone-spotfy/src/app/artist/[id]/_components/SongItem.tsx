import Link from "next/link";

export default function SongItem({image, name, duration, audio, _id, index}) {
  return (
    <Link href={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index+1}</p>

        <div className="song-item__album">
          <img 
            src={image}
            alt={`Imagem da musica ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

        <p >{duration}</p>

    </Link>
  )
}
