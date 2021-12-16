import React, {useState} from "react";
import {render} from "react-dom";

function Counter(props) {
    const [count, setCount] = useState(5);

    function handleCounterClick() {
        setCount(count - props.enabled)
    }

    return <>
        <h2>Attempts remaining: {count}</h2>
        <button onClick={handleCounterClick}>Count down</button>
    </>;
}

// Sample usage (do not modify)
render(<>
    <Counter enabled={true} />
    <Counter enabled={false} />
</>, document.querySelector("#react-root"));
