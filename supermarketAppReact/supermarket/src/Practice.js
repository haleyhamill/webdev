import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function CurrencySelector() {
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        if (currency) {
            console.log(currency);
        fetch('https://react-tutorial-demo.firebaseio.com/preferences.json', {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({currency: currency})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCurrency(data)
        })
        .catch(error => console.log(error))
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
