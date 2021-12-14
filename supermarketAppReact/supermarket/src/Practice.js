import React, {useState} from "react";
import {render} from "react-dom";

function Counter() {
    const [count, setCount] = useState(0);
    return (<>
        <h2>{count} times clicked</h2>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>);
}

render(<Counter />, document.querySelector("#react-root"));
