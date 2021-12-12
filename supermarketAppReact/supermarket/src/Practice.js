import React from "react";

function getPaymentMethods() {
    return (
        <select className="payment-methods">
            <option className="payment-method">Card</option>
            <option className="payment-method">Paypal</option>
            <option className="payment-method">Cash on delivery</option>
        </select>
    );
}

// sample usage (do not modify)
console.log(getPaymentMethods());