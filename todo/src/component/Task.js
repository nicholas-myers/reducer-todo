import React from "react"

function Task({taskName, completed, id, toggleCompleted}) {
    return (
        <li onClick={()=> {toggleCompleted(id)}} className={completed === true ? "completed" : ""}>{taskName}</li>
    )
}

export default Task