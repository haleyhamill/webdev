import React, {useRef, useEffect} from "react";
import {render} from "react-dom";

function Form() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (<form>
        <h2>Welcome</h2>
        <input ref={inputRef} type="text" placeholder="Enter your name" />
    </form>);
}

render(<Form/>, document.querySelector("#react-root"));
