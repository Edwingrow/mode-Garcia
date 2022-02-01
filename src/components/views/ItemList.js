/* eslint-disable react/prop-types */
import React from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap'
const ItemList = ({ products }) => {
  return (
    <Container>{
      products.slice(0, 6).map((productos) => (
        <Item key={productos.id} productos={productos} />

      ))
    }
    </Container>
  )
}

export default ItemList
