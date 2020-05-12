import React from "react";



export default function TaskForm({ addTask, newTask, captureTask, dispatch }) {

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTask(newTask);
      }}
    >
      <input
        type="text"
        name="taskInput"
        value={newTask}
        onChange={captureTask}
      />
      <button>Add Task</button>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}>Clear Completed</button>
    </form>
  );
}
