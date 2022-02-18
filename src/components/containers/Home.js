/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import ItemListContainer from './ItemListContainer'
import { useOutletContext } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../../firestore/firebase'
const Home = () => {
  const [productos, setProductos] = useState([])
  const [setLoading] = useOutletContext()
  useEffect(()=>{
    let mounted = true
    setLoading(true)
    const getFromFirebase = async () =>{
      const qry = collection(db, "items")
      const snapshot = await getDocs(qry)
     snapshot.forEach(doc =>{

        const {title, description, price, url, category} = doc.data()
        const producto = {
          id: doc.id,
          title: title,
          description: description,
          price: price,
          url: url,
          category: category
        }
        if (mounted) {
          setTimeout(() => {
            setProductos(productos => [...productos, producto])
            setLoading(false)
          }, 3000)
        }
        
      })
    }
    
    getFromFirebase()
    return () => (mounted = false)
  },[])
  return (
    <div>
      <ItemListContainer products={productos} />
    </div>
  )
}

export default Home
