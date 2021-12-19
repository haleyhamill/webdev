import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000)
    })

    return <h2>{date.toLocaleTimeString()}</h2>;
}