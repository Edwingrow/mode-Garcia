import React from 'react'
import { Card, Button } from "react-bootstrap";
const ItemListContainer = () => {

    let stock = 0;
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
            <div className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                    <Card.Title>Articulo </Card.Title>
                    <Card.Text>

                        <Button variant="outline-success" disabled={contador >= stockActual} onClick={() => aumentar()}>+</Button> {contador} <Button variant="outline-danger" disabled={contador === 0} onClick={() => disminuir()}>-</Button>
                    </Card.Text>

                    <Button variant="primary" onClick={() => añadir()}>Añadir</Button>
                </Card.Body>
            </Card>
            </div>
           </>
    )
}

export default ItemListContainer
