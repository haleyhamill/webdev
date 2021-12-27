import React from "react";
import {Switch, Route, Link } from "react-router-dom";
import Button from "./Button.js";


export default function Product(props) {

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${props.details.id}`}>
          <img width="100" height="100" className="product-image" alt={props.details.name} src={props.details.image}
          />
        </Link>
        <div className="product-quantity-container">
          <div className="product-quantity">0</div>
        </div>
      </div>
      <div className="product-info">
        <h3>{props.details.name}</h3>
        <p>{props.details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          <Button outline className="product-delete">x</Button>
        </div>
        <Button outline>${props.details.price}</Button>
      </div>
    </div>
  )
}
