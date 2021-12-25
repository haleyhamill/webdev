import React from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {render} from "react-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";

function App() {
  return (<BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>

        </main>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector("#react-root"));
