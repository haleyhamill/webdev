import React, {useState} from "react";

function Limit() {
    const [times, setTimes] = useState(60);

    return(
        <>
        <h2>{times} times remaining</h2>
        <button onClick={() => setTimes(times - 1)}>Use Me</button>
        </>
    );
}