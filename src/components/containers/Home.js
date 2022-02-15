/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/products' // Api call
import ItemListContainer from './ItemListContainer'
import { useOutletContext } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
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
      const qry = query(collection(db, "items"), where("categoryId", "==", "computadoras"))
      const snapshot = await getDocs(qry)
      snapshot.forEach((doc) => {
        // setProductos({id: doc.id, ...doc.data()}) //se agregan a el estado productos
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
