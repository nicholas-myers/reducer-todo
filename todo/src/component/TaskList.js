import React from "react"
import Task from "./Task"


export default function TaskList({ state, toggleCompleted }) {
    return (
        <div className="tasks">
            {state.tasks.map((task) => {
            return <Task key={task.id} id={task.id} completed={task.completed} toggleCompleted={toggleCompleted} taskName={task.taskName}/>
          })}
        </div>
    )
}