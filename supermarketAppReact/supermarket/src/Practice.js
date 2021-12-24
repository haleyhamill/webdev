import React, {useState} from "react";
import {render} from "react-dom";
import useProductCounter from "./useProductCounter.js";

function App() {
    const {count, increment, decrement} = useProductCounter();

    return <>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>;
}

render(<App />, document.querySelector("#react-root"));
