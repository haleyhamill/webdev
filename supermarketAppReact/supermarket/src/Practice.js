import React from "react";
import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "title": props.loggedIn
    });
    return <h1 className={className}></h1>
}
const element = <MyComponent loggedIn={true} />;