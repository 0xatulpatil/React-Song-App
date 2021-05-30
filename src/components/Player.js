import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";






const Player = ({ setSong, setCurrentSong, song, currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) => {


    //Useffect
    useEffect(() => {
        const newSongs = song.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSong(newSongs);

    }, [currentSong]);

    const playSongHandler = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)

        }

    }
    //function for formatting time
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }

    const toggleHandler = () => {
        if (isPlaying) {
            return 'faPause'
        } else {
            return 'faPlay'
        }
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = song.findIndex((song) => song.id === currentSong.id)
        if (direction === 'skip-forward') {
            await setCurrentSong(song[(([currentIndex + 1]) % song.length)])
        }
        if (direction === 'skip-back') {
            if (((currentIndex - 1) % song.length) === -1) {
                await setCurrentSong(song[song.length - 1]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(song[(([currentIndex - 1]) % song.length)])
        }
        if (isPlaying) audioRef.current.play();
    }



    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track">
                    <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime}
                        onChange={dragHandler} type="range" name="" id=""
                    />

                </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className='play' icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className='play' icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className='play' icon={faAngleRight} />
            </div>

        </div>
    )


}

export default Player;