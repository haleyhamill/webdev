import React, {useState} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    return <div>{seconds}</div>
}