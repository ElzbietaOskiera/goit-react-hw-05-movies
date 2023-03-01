import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background-color: rgba(0, 0, 0, 0.85);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
h1,
h2,
h3,
h4,
h5,
h5,
p {
  margin: 0;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style:  none;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
