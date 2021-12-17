import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function App() {
    // To give you a way to re-render the component
    const [random, setRandom] = useState(Math.random());

    useEffect(() => {
        console.log("Done mounting")
    }, [])

    return (
        <button onClick={() => setRandom(Math.random())}>Re-render component</button>
    );
}

render(<App />, document.querySelector("#react-root"));
