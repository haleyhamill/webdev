import React from "react";
import {render} from "react-dom";

function Clock() {
    return <h2>time here</h2>;
}

render(<Clock />, document.querySelector("#react-root"));