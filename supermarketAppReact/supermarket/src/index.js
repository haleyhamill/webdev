import './index.css';
import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";

function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route> 
        <Route exact path="/about/">
          <About/>
        </Route>
        <Route exact path="/products/" >
          <Products/>
        </Route>
        <Route exact path="/cart/" >
          <Cart/>
        </Route>
        <Route path="/products/:id/">
          <ProductDetails/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  </>);
}

render(<App />, document.getElementById("root"));
