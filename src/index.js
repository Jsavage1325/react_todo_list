import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./classBased/components/TodoContainer"
//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
    <React.StrictMode>
    <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
)

// todo figure out the correct stucture, start from here: https://ibaslogic.com/react-hooks-tutorial/