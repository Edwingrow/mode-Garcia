
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
    
    {/* {  Este es el producto de Firestore
      <Item productos={products} />
    } */}
    </Container>
  )
}

export default ItemList
