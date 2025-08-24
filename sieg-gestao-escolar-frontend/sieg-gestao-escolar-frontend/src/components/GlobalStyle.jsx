import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: transparent; /* remove contorno branco */
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
  }
`;