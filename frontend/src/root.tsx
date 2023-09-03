import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import Application from './Components/Application';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0;
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    flex-grow: 1;
    width: 100rem;
    margin: 6rem auto 0 auto;
    padding: 0 2rem;
    background-color: white;
  }
  @media only screen and (max-width: 1100px) {
    main {
      width: auto;
      margin: 0;
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Application />
  </React.StrictMode>,
);
