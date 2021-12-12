import React from "react";
import {render} from "react-dom";

function Footer() {
    return (
        <>
            <h3>Company name</h3>
            <p>All rights reserved</p>
        </>
    );
}

const root = document.querySelector("#react-root");

render(<Footer/>, root)