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
      </form>
      <div className="tasks">
        {state.map((task, index) => {
          return <Task key={task.id} taskName={task.taskName}/>
        })}
      </div>
    </div>
  );
}

export default App;
