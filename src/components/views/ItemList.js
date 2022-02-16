
import React from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap'
const ItemList = ({ products }) => {
  return (
    <Container>
      {
        products.map((productos) => {
          return <Item productos={productos} key={productos.id} />
        })
    }
    
    </Container>
  )
}

export default ItemList
