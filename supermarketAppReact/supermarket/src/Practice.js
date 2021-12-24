import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";
import Loader from "./Loader.js";

function App() {
  const [users, setUsers] = useState();
  const {get, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/");

    useEffect(() => {
        get("users.json").then(data => {
            setUsers(data);
        }).catch(error => console.error(error));
    }, []);

    return <>
        <h1>Users</h1>
        {loading && <Loader />}
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>;
}

render(<App />, document.querySelector("#react-root"));
