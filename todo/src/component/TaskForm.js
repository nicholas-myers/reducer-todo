import React from "react";



export default function TaskForm({ addTask, newTask, captureTask }) {

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
    </form>
  );
}
