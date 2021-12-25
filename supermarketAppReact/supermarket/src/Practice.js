import React from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront.js";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import ProductDetails from "./ProductDetails.js";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/">
                        <StoreFront/>
                    </Route>
                    <Route exact path="/products/:id">
                        <ProductDetails/>
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

render(<App />, document.querySelector("#react-root"));
