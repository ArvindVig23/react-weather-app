import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Reset & base */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f0f4f8;
    color: #333;
  }
  a { text-decoration: none; color: inherit; }
`;
