import React, { useEffect, useState } from 'react';
import { Card, Button, ListGroup } from "react-bootstrap";
import ItemCount from './ItemCount';
const ItemDetail = ({ product }) => {
  const { id, title, price, thumbnail, available_quantity, permalink, attributes } = product;
  const [cleanAttributes, setCleanAttributes] = useState([]);
  const whiteListAttributes = ["Marca", "Modelo", "Condición del ítem", "Peso"]
  const [contador, setContador] = React.useState(1)
  useEffect(() => {
    let newAttributes = attributes.filter(attribute => whiteListAttributes.includes(attribute.name));
    setCleanAttributes(newAttributes);
  }, [attributes]);


  const aumentar = () => {
    setContador(contador + 1)
  }
  const disminuir = () => {
    setContador(contador - 1)
    if (contador === 0) {
      setContador(0)
    }
  }
  return (<Card style={{ width: '18rem' }}>
    <Card.Img style={{ marginTop: 10, height: '200px', with: "100%", objectFit: "contain" }} variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <ListGroup>
        <ListGroup.Item> Precio${price}</ListGroup.Item>
        <ListGroup.Item>stock{available_quantity}</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        {cleanAttributes.map((attribute, index) => {
          return <ListGroup.Item key={index}>{attribute.name}: {attribute.value_name}</ListGroup.Item>
        })}
      </ListGroup>
    </Card.Body>
    <ItemCount/>
  </Card>

  )

}
export default ItemDetail;
