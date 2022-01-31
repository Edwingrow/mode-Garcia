/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/products' // Api call
import ItemListContainer from './ItemListContainer'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const [productos, setProductos] = useState([])
  const [setLoading] = useOutletContext()

  useEffect(() => {
    let mounted = true
    setLoading(true)

    getProducts('lavadoras').then((item) => {
      if (mounted) {
        setProductos(item.results)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    })
    return () => mounted = false
  }, [])
  return (
    <div>
      <ItemListContainer products={productos} />
    </div>
  )
}

export default Home
