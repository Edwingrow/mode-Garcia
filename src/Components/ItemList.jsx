import React from 'react';
import Item from "./Item"
import { Col} from "react-bootstrap";
const ItemList = ({ productos }) => {

  return <>
    {productos.map((productos) => (
        <Item key={productos.id} productos={productos} />

    ))}
  </>;
};

export default ItemList;
