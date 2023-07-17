// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  overflow: hidden;
}

body,
input,
button,
textarea,
select {
  font-family: 'Space Mono', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
