/* eslint-disable react/prop-types */
import React from 'react'
import ItemList from '../views/ItemList'

const ItemListContainer = ({ products }) => {
  return <>
  <ItemList products={products} />
  </>
}

export default ItemListContainer
