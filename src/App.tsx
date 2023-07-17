import React from "react";

import styled from "styled-components";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Content } from "./components/Content";
import { UserProps } from "./types";
import { Index } from "./components/UserData/Index";

function App(): React.ReactElement {
  const [user, setUser] = React.useState<UserProps | null>(null);

  function setUserData(user: UserProps | null): void {
    setUser(user);
  }

  return (
    <ThemeContextProvider>
      <Container>
        <Content setUser={setUserData} />
        {user && <Index user={user} />}
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App;
