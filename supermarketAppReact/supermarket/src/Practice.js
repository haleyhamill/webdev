import React, {useEffect} from "react";
import {render} from "react-dom";

function useWelcomeGreeting() {
    useEffect(() => {
        console.log("Welcome to my app")
    }, [])
}

function App() {
    useWelcomeGreeting()
    return <h1>My App</h1>
}

render(<App />, document.querySelector("#react-root"));
