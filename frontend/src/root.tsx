import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import { Search, Home } from './Pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
