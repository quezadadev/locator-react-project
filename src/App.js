import React from 'react';
import { Routes,Link, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Link to="/">
        <Header/>
      </Link>
   
  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/resturants" element={<Restaurant />} />
      <Route path="/resturants/:id" element={<Restaurant />} />
    </Routes>
   
  </>
  );
};

export default App;