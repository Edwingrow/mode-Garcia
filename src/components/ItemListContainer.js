/* eslint-disable react/prop-types */
import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ products }) => {
  return <>
    <ItemList products={products} />
  </>
}

export default ItemListContainer
