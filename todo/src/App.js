import React, { useState, useReducer } from 'react';

import './App.css';


const taskReducer = (state, action) => {
  return state
}

const initialTask = {
  taskName: "get groceries",
  completed: false,
  taskId: "task1",
  
}

function App() {

  const [tasks, setTasks] = useState([initialTask])
  const [state, dispatch] = useReducer(taskReducer, initialTask)

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      {tasks.map(task => {
        return <p>{task.taskName}</p>
      })}
    </div>
  );
}

export default App;
