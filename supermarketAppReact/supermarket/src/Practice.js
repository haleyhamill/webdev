import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
import About from "./About.js";
import Home from "./Home.js";

function App() {
  return (
    <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector("#react-root"));
