import React from "react";

import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 20px 10px black;
  height: 15vh;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Tasks</h1>
    </StyledHeader>
  );
}
