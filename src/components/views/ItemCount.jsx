import React, { useState, useContext  } from 'react'
import { Card, Button } from 'react-bootstrap'
import {CartContext} from '../../context/CartContext'


const ItemCount = ({ available_quantity}) => {
  const { addItem } = useContext(CartContext);
  const inicial = 1
  const [contador, setContador] = useState(inicial)
  const aumentar = () => {
    setContador(contador + 1)
  }
  const disminuir = () => {
    setContador(contador - 1)
    if (contador === 0) {
      setContador(0)
    }
  }
  return (
            <>
            <Card style={{ width: '18rem', border: 'none' }}>
                <Card.Body>
                    <Card.Text>
                        <small className="text-muted">Disponible: {available_quantity}</small>
                    </Card.Text>
                    <Button onClick={() => addItem(contador)} variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
           </>
  )
}

export default ItemCount
