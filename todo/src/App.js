import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import './App.css';

import Header from "./component/Header"
import TaskForm from "./component/TaskForm"
import TaskList from "./component/TaskList"
// import Task from "./component/Task"


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

  //clearCompleted

  return (
    <div className="App">
      <Header />
      <section className="content">
        <TaskForm addTask={addTask} newTask={newTask} captureTask={captureTask} />
        <TaskList state={state} toggleCompleted={toggleCompleted}/>
      </section>
    </div>
  );
}

export default App;
