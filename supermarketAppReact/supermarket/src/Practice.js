import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <h2>{date.toLocaleTimeString()}</h2>;
}

render(<Clock />, document.querySelector("#react-root"));