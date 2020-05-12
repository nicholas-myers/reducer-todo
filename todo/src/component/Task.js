import React from "react"

function Task({taskName, completed, id, toggleCompleted}) {
    return (
        <div onClick={()=> {toggleCompleted(id)}} className={completed === true ? "completed" : ""}>{taskName}</div>
    )
}

export default Task