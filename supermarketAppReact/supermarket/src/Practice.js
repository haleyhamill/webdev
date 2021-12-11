import React from "react";

function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
    }
    return <button className={name}>Pay</button>;
}