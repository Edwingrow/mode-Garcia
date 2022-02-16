/* eslint-disable react/prop-types */

import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Item = ({ productos }) => {
  const { title, price} = productos
  const navigate = useNavigate()
  const Navigate = () => {
    navigate(`/productos/${productos.id}`)
  }
  return (<Card style={{ width: '15rem' }}>
        <Card.Img style={{ marginTop: 10, height: '100px', with: '100%', objectFit: 'contain' }} variant="top" src='../../assets/images/D_738272-MLA48066671769_102021-I.jpg' />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Precio:{price}
            </Card.Text>
            <Button variant="primary" onClick={() => Navigate()}>Ver detalle del producto</Button>
        </Card.Body>
    </Card>
  )
}
export default Item
