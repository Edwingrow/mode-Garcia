import React from 'react';
import { Card, Button } from "react-bootstrap";
const Item = ({ productos }) => {
    const { title, price, image, stock } = productos;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Precio:{price}
                    </Card.Text>
                    <Card.Text>
                        stock:{stock}
                    </Card.Text>
                    <Button variant="primary">Ver detalle del producto</Button>
                </Card.Body>
            </Card>
        </>)
}
export default Item;