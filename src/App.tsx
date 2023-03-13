import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Restaurant from './pages/Restaurant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="restaurant" element={<Restaurant />} />
        </Route>
      </Routes>
      {/* <Navigation /> */}
    </BrowserRouter>
  );
}

export default App;
