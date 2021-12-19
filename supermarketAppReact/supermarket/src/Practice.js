import React, {useState} from "react";
import {render} from "react-dom";

function Clock() {
    const [date, setDate] = useState(new Date());

    return <h2>{date.toLocaleTimeString()}</h2>;
}

render(<Clock />, document.querySelector("#react-root"));