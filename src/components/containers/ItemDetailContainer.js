import { useOutletContext, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ItemDetail from '../views/ItemDetail'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firestore/firebase'
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [setLoading] = useOutletContext()
  useEffect(() => {
    let mounted = true
    setLoading(true)
    const getProductFromFirebase = async () => {
      const docRef = doc(db, "items", id)
      const docSnapshot = await getDoc(docRef)
      console.log(docSnapshot.data())
      if(mounted){
        setProduct(docSnapshot.data())
        setTimeout(()=>{
          setLoading(false)
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
