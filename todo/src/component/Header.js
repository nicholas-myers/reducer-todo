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

const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 0 1px 20px gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Title>Tasks</Title>
    </StyledHeader>
  );
}
