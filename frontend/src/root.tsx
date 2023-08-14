import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './Components/Header';
import { Search, Home } from './Pages';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex-grow: 1;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>,
);
