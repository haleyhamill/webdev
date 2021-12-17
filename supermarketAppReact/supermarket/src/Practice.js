import React, {useEffect} from "react";

function App() {
    useEffect(() => {
        setTimeout(() => {
            console.log("This will run in 1 second");
        }, 1000);
    });

    return <h1>App</h1>;
}