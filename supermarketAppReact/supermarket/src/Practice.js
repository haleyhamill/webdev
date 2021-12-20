import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count > 0) {
      console.log(count)
    }}, [count])

    function handleButtonClick() {
        setCount(prevCount => prevCount + 5);
    }

    return <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Add 5</button>
    </>;
}

render(<App />, document.querySelector("#react-root"));
