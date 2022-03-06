/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import Loading from '../views/Loading'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from '../views/ItemList'
const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const { category } = useParams()
  useEffect(() => {
    let mounted = true
    setLoading(true)
    const db = getFirestore()
    if (category) {
      const getFromFirebase = async ()=>{
        const collectionformCategory = query(collection(db, 'items'), where('category', '==', category))
        const resp = await getDocs(collectionformCategory)
        if(mounted){
          setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() })))
          setLoading(false)
        } 
      }
      getFromFirebase()
    } else {
      const queryCollection = collection(db, 'items')
        if(mounted){
         setTimeout(() => {
          getDocs(queryCollection)
          .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
          setLoading(false)
         }, 2000)
        }
       
    }
    return () => (mounted = false)
  }, [category])
 

  return (
    <div>
      <ItemList products={productos} />
      {loading ? <Loading /> : null}
    </div>
  )
}

export default ItemListContainer
