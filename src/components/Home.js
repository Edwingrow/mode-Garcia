/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/products' // Api call
import ItemListContainer from './containers/ItemListContainer'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const [productos, setProductos] = useState([])
  const [setLoading] = useOutletContext()

  useEffect(() => {
    let mounted = true
    setLoading(true)

    getProducts('PC Gamer').then((item) => {
      if (mounted) {
        setProductos(item.results)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    })
    return () => (mounted = false)
  }, [])
  return (
    <div>
      <ItemListContainer products={productos} />
    </div>
  )
}

export default Home
