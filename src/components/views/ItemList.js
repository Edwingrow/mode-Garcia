/* eslint-disable react/prop-types */
import React from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap'
const ItemList = ({ products }) => {
  return (
    <Container>
      {
        products.slice(0, 5).map((productos) => {
          return <Item productos={productos} key={productos.id} />
        })
    }
    </Container>
  )
}

export default ItemList
