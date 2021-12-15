import React from "react";

function App(props) {
    const loginButton = <button>Login</button>;
    const signupButton = <button>Signup</button>;
    if (props.existingUser) {
        return <div className="app-container">{loginButton}</div>;
    }
    return <div className="app-container">{props.existingUser ? loginButton: signupButton}</div>;
}