import './index.css';
import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav() {
    return <nav>
        <ul>
            <li>
                <NavLink end to="/">Home</NavLink>
            </li>
            <li>
                <NavLink end to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
        </ul>
    </nav>
}
