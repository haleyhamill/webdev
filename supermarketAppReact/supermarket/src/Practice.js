import React, {useState} from "react";
import {render} from "react-dom";
import useFetch from "./useFetch.js";

function GradeForm() {
    const [grade, setGrade] = useState(0);
    const {post} = useFetch("https://api.learnjavascript.online/demo/react/")

    function handleFormSubmit(event) {
        event.preventDefault();
        post("grades", {"grade": grade});
        setGrade(0);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="number" value={grade} name="grade" onChange={event => setGrade(event.target.value)} placeholder="Enter the grade" />
            <input type="submit" />
        </form>
    );
}

render(<GradeForm />, document.querySelector("#react-root"));
