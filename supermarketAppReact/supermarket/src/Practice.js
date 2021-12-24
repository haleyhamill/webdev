import React, {useRef, useEffect} from "react";
import {render} from "react-dom";

function VideoPlayer() {
    const videoRef = useRef()

    function handlePlayClick() {
        videoRef.current.play()
    }

    function handlePauseClick() {
        videoRef.current.pause()
    }

    return (<>
        <h2>Video player</h2>
        <button onClick={handlePlayClick}>Play</button>
        <button onClick={handlePauseClick}>Pause</button>
        <video ref={videoRef} width="300" controls src="https://res.cloudinary.com/dbfn5lnvx/video/upload/v1599125933/react-tutorial/ref-video-player-challenge.mp4" />
    </>);
}

render(<VideoPlayer/>, document.querySelector("#react-root"));
