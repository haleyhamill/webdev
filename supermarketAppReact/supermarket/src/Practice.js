import {useLayoutEffect} from "react";

export default function useMapboxMap(container) {
    mapboxgl.accessToken = "pk.eyJ1IjoieG94b3hveG94byIsImEiOiJja3ZjcmFwZW05aHloMm5waDVxeTc4dW5iIn0.JQpWtubaYBPXqL2aJGbAzA"

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: container,
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });
    }, []);
}