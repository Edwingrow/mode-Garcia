import React from 'react'
import ItemListContainer from '../components/containers/ItemListContainer';
import NoPage from '../components/views/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/containers/ItemDetailContainer'
import Checkout from '../components/checkout/Checkout';
import CartPage from '../components/views/CartPages'
import NavBar from '../components/views/NavBar';
import { Hero } from '../components/views/Hero';
const AppRouter = () => {
  return ( 
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route exact path="/products" element={<ItemListContainer />} />
        <Route exact path="/products/:category" element={<ItemListContainer />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;
