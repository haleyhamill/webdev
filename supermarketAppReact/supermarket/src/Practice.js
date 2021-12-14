import React from "react";
import {render} from "react-dom";

function App() {
    return <button onClick={() => console.log("Hello World!")}>click me</button>;
}

render(<App />, document.querySelector("#react-root"));
