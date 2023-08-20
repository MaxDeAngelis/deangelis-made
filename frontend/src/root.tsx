import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './Components/Header';
import { Search, Home, RecipeLoader, Recipe } from './Pages';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-size: 20px;
    --background-color: #f0f0f0;
  }
  * {
    font-size: var(--font-size);
  }
  body {
    margin: 0;
    font-family: sans-serif;
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
  @media only screen and (max-width: 50rem) {
    main {
      width: auto;
    }
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
          <Route path='recipe' element={<RecipeLoader />}>
            <Route path=':id' element={<Recipe />} />
          </Route>
          <Route path='search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>,
);
