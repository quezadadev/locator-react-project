import React from 'react';
import { Routes,Link, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

const App = () => {
  return (
    <div>
      <Link to="/">
        <Header/>
      </Link>
   
  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/resturants" element={<Restaurant />} />
      <Route path="/resturants/:id" element={<Restaurant />} />
    </Routes>
    </div>
  );
};

export default App;