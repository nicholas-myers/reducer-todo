import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import './App.css';




function App() {
  // const [newTask, setNewTask] =useState("")
  const [state, dispatch] = useReducer(taskReducer, initialTasks)


  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <form onSubmit={(event) => { 
        event.preventDefault()}}>
        <input 
        type="text"
        value={state.taskInput}
        onChange={(event) => {dispatch({ type: "CAPTURE_TASK", payload: event.target.value})}}
        />
        <button
        onClick={() => {
          dispatch({ type: "ADD_TASK" })
        }}
        >Add Task</button>
      </form>
      <div>
        {state.tasks.map(task => {
          return <p key={Date.now()}>{task.taskName}</p>
        })}
      </div>
    </div>
  );
}

export default App;
