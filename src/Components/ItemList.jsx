import React from 'react';
import Item from "./Item"
import {Container} from "react-bootstrap";
const ItemList = ({ productos }) => {

  return (
    <Container>{
      productos.map((productos) => (
        <Item key={productos.id} productos={productos} />
  
    ))
      }
   </Container>
  )

    
  
};

export default ItemList;
