
import { useOutletContext, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ItemDetail from '../views/ItemDetail'
import { getDescription, getProduct } from '../../services/products'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [setLoading] = useOutletContext()
  useEffect(() => {
    let mounted = true
    setLoading(true)
    Promise.all([getProduct(id), getDescription(id)])
      .then(results => {
        const item = results[0]
        item.description = results[1].plain_text
        if (mounted) {
          setProduct(item)
          setTimeout(() => {
            setLoading(false)
          }, 3000)
        }
      })

    return () => mounted = false
  }, [id])
  return (
      <div className='item-detail-container'>
        {product ? <ItemDetail product={product} /> : null}
      </div>
  )
}
export default ItemDetailContainer
