import React from 'react'
import Layout from '../components/Layout';
import Home from '../components/containers/Home';
import NoPage from '../components/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/containers/ItemDetailContainer'
import Checkout from '../components/checkout/Checkout';
import Footer from '../components/Footer';
import CartPage from '../components/views/CartPages'
import AddItem from '../components/views/AddItem';
const AppRouter = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
           <Route path="/productos/:id" element={<ItemDetailContainer />} />
           <Route path="/category/:category" element={<ItemDetailContainer />} />
           <Route path="/additem" element={<AddItem />} />   
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/checkout" element={<Checkout/>}/>    
             <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )
};

export default AppRouter;
