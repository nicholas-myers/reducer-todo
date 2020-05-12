import React from "react";
import styled from "styled-components";

const StyledTaskForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export default function TaskForm({ addTask, newTask, captureTask }) {
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
    </StyledTaskForm>
  );
}
