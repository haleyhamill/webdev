import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    const className = darkTheme ? "dark" : "light";

    useEffect(() => {

        localStorage.setItem("dark_theme", darkTheme)
    }, [darkTheme]);

    function handleToggleClick() {
        setDarkTheme(!darkTheme);
    }

    return <div className={className}>
        <h1>Welcome</h1>
        <button onClick={handleToggleClick}>Toggle theme</button>
    </div>;
}

render(<App />, document.querySelector("#react-root"));
