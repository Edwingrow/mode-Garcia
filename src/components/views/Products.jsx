import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../containers/Home'
const Products = () => {
  return (
     <Link to={'/products'}>
        <Home/>
     </Link> 
  )
}

export default Products