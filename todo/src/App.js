import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
// import initialTasks from "./reducers/taskReducer"
import './App.css';




function App() {
  const [newTask, setNewTask] =useState("")
  const [state, dispatch] = useReducer(taskReducer, initialTasks)

 const captureTask = (e) => {
    setNewTask(e.target.value)
  }

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <form>
        <input 
        type="text"
        value={state.newTask}
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
