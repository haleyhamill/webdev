import React, {useState} from "react";
import {render} from "react-dom";

function CurrencySelector() {
    const [currency, setCurrency] = useState("");
    const [rate, setRate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleCurrencyChange(event) {
        event.persist()
        setIsLoading(true);
        fetch(`https://react-tutorial-demo.firebaseio.com/currencies/${event.target.value}.json`)
            .then(response => response.json())
            .then(data => {
                setCurrency(event.target.value);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(false);
            });
    }

    return <>
        <h2>Currency selector</h2>
        <select onChange={handleCurrencyChange} disabled={isLoading}>
            <option value="">Select a currency</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="cad">CAD</option>
        </select>
        <h3>Chosen currency: <span id="chosen">{currency.toUpperCase()}</span></h3>
    </>;
}

render(<CurrencySelector />, document.querySelector("#react-root"));
