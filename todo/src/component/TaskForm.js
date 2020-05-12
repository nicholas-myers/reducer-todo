import React from "react";
import styled from "styled-components";

const StyledTaskForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 5% 3%;
  font-size: 2rem;
  box-shadow: inset 0 0 20px 10px black;
  input {
      font-size: 2rem;
      width: 40%;
  }
`;


export default function TaskForm({ addTask, newTask, captureTask,clearCompleted }) {
  return (
    <StyledTaskForm
      onSubmit={(event) => {
        event.preventDefault();
        addTask(newTask);
      }}
    >
        <label htmlFor="taskInput">New Task:</label>
      <input
        type="text"
        name="taskInput"
        value={newTask}
        onChange={captureTask}
      />
      <button>Add Task</button>
      <button
          onClick={clearCompleted}
        >Clear Completed</button>
    </StyledTaskForm>
  );
}
