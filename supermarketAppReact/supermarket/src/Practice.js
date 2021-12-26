import React from "react";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import {render} from "react-dom";
import Home from "./Home.js";
import Products from "./Products.js";
import Team from "./Team.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="nav-active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/non-existing-page">Non existing page</NavLink>
            </li>
          </ul>
        </nav>

        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/team">
                    <Team />
                </Route>
                <Route>
                  <NotFound />
                </Route>
            </Switch>
        </main>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector("#react-root"));
