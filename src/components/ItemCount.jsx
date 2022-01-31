/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
const ItemConunt = ({ available_quantity }) => {
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
                        <Button variant="outline-success" disabled={contador >= available_quantity} onClick={() => aumentar()}>+</Button>
                        <span>{contador}</span>
                        <Button variant="outline-danger" disabled={contador === 0} onClick={() => disminuir()}>-</Button>
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Disponible: {available_quantity}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
           </>
  )
}

export default ItemConunt
