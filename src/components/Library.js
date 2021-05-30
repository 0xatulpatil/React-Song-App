import React from 'react';
import LibrarySongs from './LibrarySongs'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSong, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) =>
                    <LibrarySongs
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSong={setSong}

                    />)}
            </div>
        </div>
    )
}

export default Library;