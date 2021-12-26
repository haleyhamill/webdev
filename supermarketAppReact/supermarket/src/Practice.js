import React, {useEffect} from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import Landing from "./Landing.js";
import Products from "./Products.js";
import Team from "./Team.js";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

    return (<>
        <nav>
          <h2>You are currently viewing: {location.pathname}</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </nav>

        <main>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/team">
                    <Team />
                </Route>
            </Switch>
        </main>
    </>);
}
