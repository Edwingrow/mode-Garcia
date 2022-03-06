
import React from 'react'
import Item from './Item'
import { Container } from 'react-bootstrap'
const ItemList = ({ products }) => {
  return (
    <Container className='container-card'>
      {
        products.map((productos) => {
          return <Item key={productos.id} productos={productos} />
        })
    }
    
    </Container>
  )
}

export default ItemList
