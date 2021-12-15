import React from "react";

function App() {
    return <input onKeyDown={() => console.log("Changed")} placeholder="Enter your name" />;
}