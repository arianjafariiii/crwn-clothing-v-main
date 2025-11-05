import './videoPlayer.css'

import React, { useRef } from 'react';
import video from '../../assets/7971025-uhd_3840_2160_24fps(2).mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current) {
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '': 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} muted controls autoPlay ></video>
    </div>
  )
}

export default VideoPlayer