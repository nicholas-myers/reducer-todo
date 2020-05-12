import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import './App.css';

import Task from "./component/Task"


function App() {
  const [newTask, setNewTask] =useState("")
  const [state, dispatch] = useReducer(taskReducer, initialTasks)

  const captureTask = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = (task) => {
    const newTask = {
      taskName: task,
      completed: false,
      id: Date.now()
    }

    dispatch({ type: "ADD_TASK", payload: newTask })
    setNewTask("")

  }

  // toggle completed
  const toggleCompleted = (id) => {
    console.log(id)
    dispatch({ type: "TOGGLE_COMPLETED", payload: id })
  }

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <form onSubmit={(event) => { 
        event.preventDefault()
        addTask(newTask)}}>
        <input 
        type="text"
        name="taskInput"
        value={newTask}
        onChange={captureTask}
        />
        <button>Add Task</button>
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}>Clear Completed</button>
      </form>
      <div className="tasks">
        {state.tasks.map((task) => {
          return <Task key={task.id} id={task.id} completed={task.completed} toggleCompleted={toggleCompleted} taskName={task.taskName}/>
        })}
      </div>
    </div>
  );
}

export default App;
