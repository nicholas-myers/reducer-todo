import React, { useState, useReducer } from 'react';
import { taskReducer, initialTasks } from "./reducers/taskReducer"
import './App.css';

import Header from "./component/Header"
import TaskForm from "./component/TaskForm"
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

  //clearCompleted
  // const clearCompleted = () => {
  //   dispatch({ type: "CLEAR_COMPLETED" })
  // }

  return (
    <div className="App">
      <Header />
      <section className="content">
        <TaskForm addTask={addTask} newTask={newTask} captureTask={captureTask} dispatch={dispatch} />
        <div className="tasks">
          {state.tasks.map((task) => {
            return <Task key={task.id} id={task.id} completed={task.completed} toggleCompleted={toggleCompleted} taskName={task.taskName}/>
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
