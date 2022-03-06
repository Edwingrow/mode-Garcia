import {useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ItemDetail from '../views/ItemDetail'
import {doc, getDoc, getFirestore } from 'firebase/firestore'
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    let mounted = true
    const db = getFirestore()
    const getProductFromFirebase =  () => {
      const docRef = doc(db, "items", id)
      const docSnapshot = getDoc(docRef)
      docSnapshot
      .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
      .catch((error) => console.log(error))
     
      if(mounted){
        
        setTimeout(()=>{
        },3000)
      }
    }
    getProductFromFirebase()
    return () => mounted = false
  }
    , [])
  return (
    <div className='item-detail-container'>
      {product ? <ItemDetail product={product} /> : null}
    </div>
  )
}
export default ItemDetailContainer
