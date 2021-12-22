import React, {useEffect, useState} from "react";
import Product from "./Product.js";

export default function StoreFront() {
    const [products, setProducts] = useState();

    useEffect(() => {
        try { 
            (async () => {
            const response = await fetch("https://react-tutorial-demo.firebaseio.com/products.json")
            const data = await response.json()
            if (data) {
                console.log(data)
                setProducts(data)
            }
        })() }
        catch(error) { console.error(error) }
    }, []);

    return(
        <div className="store-front">
            { products && products.map(product => <Product key={product.id} details={product}/>) }
        </div>);
}