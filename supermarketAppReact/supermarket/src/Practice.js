import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("p", {}, "Hello World");
ReactDOM.render(element, document.getElementById('react-root'))