import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function Counter() {
    const [times, setTimes] = useState(0);

    useEffect(() => {
        document.title = `${times} times`
    })

    function handleButtonClick() {
         setTimes(prevTimes => prevTimes + 1);
    }

    return (<>
        <h2>{times} times clicked</h2>
        <button onClick={handleButtonClick}>Add 1</button>
    </>);
}

render(<Counter />, document.querySelector("#react-root"));
