"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Player = ({ duration, randomIdSongArtist, randomId2SongArtist, song }) => {

  const audioPlayer = useRef();
  const proressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState("00:00");

  const timeInSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(':');
    return Number(minutes) * 60 + Number(seconds);
  }
  const durationInSeconds = timeInSeconds(duration);


  const formatTime = (time) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const updateTime = () => {
      if (audioPlayer.current) {
        setAudioTime(formatTime(audioPlayer.current.currentTime));

        proressBar.current.style.setProperty(
          "--_progress", ((audioPlayer.current.currentTime / durationInSeconds).toFixed(2) * 100) + "%")
      }
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
    setAudioTime(formatTime(audioPlayer.current?.currentTime));
  }, [isPlaying]);



  return (
    <div className='player'>
      <div className='player__controllers'>
        <Link href={`/song/${randomIdSongArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className='player__icon player__icon--play'
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => setIsPlaying(!isPlaying)}
        />

        <Link href={`/song/${randomId2SongArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
        </Link>
      </div>

      <div className='player__progress'>
        <p>{audioTime}</p>
        <div className='player__bar'>
          <div ref={proressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={song.audio}></audio>
    </div>
  );
};

export default Player;
