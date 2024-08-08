import HomePage from 'components/HomePage';
import Advertise from 'pages/Advertise';
import Cart from 'pages/Cart';
import Category from 'pages/Category';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// React-router documentation: https://reactrouter.com/en/v6.3.0/getting-started/overview
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/advertise" element={<Advertise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
