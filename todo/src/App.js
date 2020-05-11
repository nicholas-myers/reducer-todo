import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
// import initialTasks from "./reducers/taskReducer"
import './App.css';




function App() {

  const [state, dispatch] = useReducer(taskReducer, initialTasks)

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      {initialTasks.map(task => {
        return <p>{task.taskName}</p>
      })}
    </div>
  );
}

export default App;
