import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Loading from './Loading'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../firestore/firebase'
const Layout = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    let mounted = true
    setLoading(true)
    const getFromFirebase = async () =>{
      const qry = collection(db, "items")
      const snapshot = await getDocs(qry)
      const productos = []
      productos.push(...snapshot.docs.map(doc => doc))
      
      productos.forEach(doc =>{
        const {title, description, price, url, category, name} = doc.data()
        const producto = {
          id: doc.id,
          title: title,
          description: description,
          price: price,
          url: url,
          category: category,
          name:name
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
    <div className='App'>
      <NavBar  productos={productos} />
      <Outlet context={[setLoading]} />
      {loading ? <Loading /> : null}
    </div>
  )
}

export default Layout
