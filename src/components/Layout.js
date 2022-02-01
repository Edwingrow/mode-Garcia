import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Loading from './Loading'
import {getCategories} from '../services/products'
const Layout = () => {
  const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

      useEffect(() => {
        let mounted = true
        getCategories('MLA').then(results => {
          if(mounted) {
              setCategories(results)

          }
        })
        return () => mounted = false;
      }, [])
  return (
    <div className='App'>
      <NavBar  categories={categories} />
      <Outlet context={[setLoading]} />
      {loading ? <Loading /> : null}
    </div>
  )
}

export default Layout
