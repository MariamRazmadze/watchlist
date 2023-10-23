import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2.4rem;
  color:${({ theme }) => theme.text};
  background-color:${({ theme }) => theme.background};
  font-family: "Quicksand";
  font-weight: 500;
  overflow-x: hidden;
}

`;

export default GlobalStyles;
