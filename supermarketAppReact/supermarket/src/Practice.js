import React from "react";

function getLoginStatus(is_loggedin) {
    if (is_loggedin) {
        return <p>You are logged in</p>;
    }
    return <a href="/login">Login</a>;
}