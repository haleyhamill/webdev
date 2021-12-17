import React, {useState, useLayoutEffect} from "react";
import {render} from "react-dom";

function App() {
    const [random, setRandom] = useState(Math.random());
    mapboxgl.accessToken = "pk.eyJ1IjoieG94b3hveG94byIsImEiOiJja3ZjcmFwZW05aHloMm5waDVxeTc4dW5iIn0.JQpWtubaYBPXqL2aJGbAzA";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [12.567898, 55.675830],
            zoom: 9
        });
    }, []);

      return <>
        <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
    </>;
}

// Do NOT modify the code below
// Special map loading setup
// specific to react-tutorial.app
const script = document.createElement("script");
script.src = "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
script.onload = () => {
    render(<App />, document.querySelector("#react-root"));
}

document.body.appendChild(script)
