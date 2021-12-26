import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav() {
    return <nav>
        <ul>
            <li>
                <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="nav-active" exact to="/about">About</NavLink>
            </li>
            <li>
                <NavLink activeClassName="nav-active" to="/products">Products</NavLink>
            </li>
        </ul>
    </nav>
}
