import React from "react";
import {render} from "react-dom";
import NoPermission from "./NoPermission.js";

function Admin(props) {
    if (props.userType === "admin") {
        return( 
        <div>
            <h1>Welcome Admin</h1>
            <p>The Admin portal allows you to manage all your items</p>
        </div>)
    } else {
        return <NoPermission />
    }
}

// Sample usage (do not modify)
render(<>
    <Admin userType="admin" />
    <Admin userType="client" />
</>, document.querySelector("#react-root"));
