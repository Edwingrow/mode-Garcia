import React, { useEffect, useSelector } from 'react';
import { Card, Button } from "react-bootstrap";

const Item = ({ productos }) => {

    const [producto, setProducto] = React.useState([])
    useEffect(() => {
        setProducto(productos)
    })
    return (
        <>
            <div className="container">
                (
                {
                    producto.map(element => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.image} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        {element.price}
                                    </Card.Text>
                                    <Card.Text>
                                        stock:{element.stock}
                                    </Card.Text>
                                    <Button variant="primary">Ver detalle del producto</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                )
            </div>
        </>
    )
};

export default Item;
