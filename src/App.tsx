import React from "react";

import styled from "styled-components";

function App(): React.ReactElement {
  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #282c34;
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App;
