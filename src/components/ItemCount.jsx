import React from 'react';
import { Card, Button } from "react-bootstrap";
import ItemDetail from './ItemDetail';
const Item = () => {
    const inicial = 1;
    const [contador, setContador] = React.useState(inicial)
    const [stockActual, setStockActual] = React.useState(10)
    const aumentar = () => {
        setContador(contador + 1)
    }
    const disminuir = () => {
        setContador(contador - 1)
        if (contador === 0) {
            setContador(0)
        }
    }
    const añadir = () => {
        setContador(contador)
        setStockActual(stockActual - contador)
        console.log(`stock actual ${stockActual}`)
        console.log(`contador ${contador}`)
    }


    return (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>

                        <Button variant="outline-success" disabled={contador >= stockActual} onClick={() => aumentar()}>+</Button> {contador} <Button variant="outline-danger" disabled={contador === 0} onClick={() => disminuir()}>-</Button>
                    </Card.Text>

                    <Button variant="primary" onClick={() => añadir()}>Añadir</Button>
                </Card.Body>
            </Card>
           </>
    )
};

export default Item;