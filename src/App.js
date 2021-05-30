import React, { useState, useRef } from 'react'
import Song from "./components/Song"
import Player from "./components/Player"
import './styles/app.scss';
import data from './util'
import Library from './components/Library'
import Nav from './components/Nav';


function App() {

  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  }


  const audioRef = useRef(null);
  const songEndHandler = async () => {
    let currentIndex = song.findIndex((song) => song.id === currentSong.id)

    await setCurrentSong(song[(([currentIndex + 1]) % song.length)])
    if (isPlaying) audioRef.current.play();

  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

      <Song currentSong={currentSong} />
      <Player currentSong={currentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        song={song}
        setCurrentSong={setCurrentSong}
        setSong={setSong}
      />
      <Library
        libraryStatus={libraryStatus}
        songs={song}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSong={setSong}
      />
      <audio
        onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      >
      </audio>
    </div>
  );
}

export default App;
