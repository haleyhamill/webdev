import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function CurrencySelector() {
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        if (currency) {
            console.log(currency);
        }
    }, [currency]);

    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }

    return <>
        <h3>Select currency</h3>
        <select onChange={handleCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="cad">CAD</option>
        </select>
        <h1>{currency}</h1>
    </>;
}

render(<CurrencySelector />, document.querySelector("#react-root"));