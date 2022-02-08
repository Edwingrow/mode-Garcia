import React from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import NoPage from './components/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer'
import Category from './components/Category'
import { CartProvider } from './context/CartContext'

function App () {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<Category />} /> 
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
