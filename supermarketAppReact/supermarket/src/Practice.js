import React from "react";

function Navbar(props) {
    if (!props.loggedIn) {
        return <p>Register</p>
    }
    return <p>Welcome back!</p>
}

const element1 = <Navbar loggedIn={true} />
const element2 = <Navbar loggedIn={false} />