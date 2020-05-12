import React from "react";
import styled from "styled-components";

const StyledTask = styled.div`
  font-size: 2rem;
  border: 1px solid black;
  width: 100%;
`;

function Task({ taskName, completed, id, toggleCompleted }) {
  return (
    <StyledTask
      onClick={() => {
        toggleCompleted(id);
      }}
      className={completed === true ? "completed" : ""}
    >
      {taskName}
    </StyledTask>
  );
}

export default Task;
