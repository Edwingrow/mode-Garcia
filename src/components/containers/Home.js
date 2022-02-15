/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/products' // Api call
import ItemListContainer from './ItemListContainer'
import { useOutletContext } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../../firestore/firebase'
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
  useEffect(()=>{
    const getFromFirebase = async () =>{
      const query = collection(db,"items")
      const snapshot = await getDocs(query)
      snapshot.forEach((doc) => {
        console.log(doc.data())
      })
    }
    getFromFirebase()
  },[])
  return (
    <div>
      <ItemListContainer products={productos} />
    </div>
  )
}

export default Home
