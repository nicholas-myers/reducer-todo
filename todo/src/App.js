import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import './App.css';




function App() {
  const [newtask, setNewTask] =useState("")
  const [state, dispatch] = useReducer(taskReducer, initialTasks)

 const captureTask = (e) => {
   setNewTask(e.target.value) 
  }


  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <form onSubmit={(event) => { 
        event.preventDefault()
        dispatch({ type: "ADD_TASK", payload: `${newtask}`})
       }}>
        <input 
        type="text"
        value={newtask}
        onChange={captureTask}
        />
        <button>Add Task</button>
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
