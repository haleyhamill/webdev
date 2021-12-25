import React from "react";
import {render} from "react-dom";
import {EN} from "./translations.js";

function App() {
    return (<>
        <div dangerouslySetInnerHTML={{__html: EN.welcome}}></div>
        <button dangerouslySetInnerHTML={{__html: EN.login}}></button>
    </>);
}

render(<App />, document.querySelector("#react-root"));
