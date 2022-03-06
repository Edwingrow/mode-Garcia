import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [goToCart, setGoToCart] = useState(false);
    const { title, description, price, sold_quantity, attributes, url, available_quantity } = product
    const [itemsQty, setItemsQty] = useState(1)

    let precioCuotas = price / 6
    let precioCuotas2 = precioCuotas.toFixed(3)
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Card className="mb-10">
                        <Card.Header>
                            <nav className="header-navigation">
                                <Link to="/products" className="btn btn-link">Volver atras</Link>
                            </nav>
                        </Card.Header>
                        <Card.Body className="store-body">
                            <Row>
                                <Col xs={7} className="product-info">
                                    <img src={url}  className="img card-img-products" />
                                    <Col className
                                        me="product-seller-recommended">
                                        <Col className="product-description mb-5" style={{ textAlign: 'left' }}>
                                            <h5 className="mt-3 mb-4">Lo que tenés que saber de este producto</h5>
                                            <ol>
                                                {
                                                    attributes.map((atributo, index) => {
                                                        return <li key={index}>
                                                            {atributo}</li>
                                                    })
                                                }
                                            </ol>
                                        </Col>
                                        <Col className="product-description mb-5" style={{ textAlign: 'left' }}>
                                            <h5 className="mt-3 mb-4">Lo que tenés que saber de este producto</h5>
                                            <ol>
                                                {description}
                                            </ol>
                                        </Col>
                                    </Col>
                                </Col>
                                <Col className="product-payment-details">
                                    <p className="last-sold text-muted"><small>{sold_quantity} vendidos</small></p>
                                    <h4 className="product-title mb-2">{title}</h4>
                                    <h2 className="product-price display-4">$ {price}</h2>
                                    <p className="text-success"><i className="fa fa-credit-card"></i>  6 cuotas de ${precioCuotas2} sin interés  </p>
                                    <p className="mb-0"><i className="fa fa-truck"></i> Tipo de Garantia</p>
                                    <label htmlFor="quant">Cantidad</label>
                                    <div className="mb-3">
                                        <ItemCount itemsQty={itemsQty} available_quantity={available_quantity} setItemsQty={setItemsQty} />
                                    </div>
                                    {!goToCart
                                        ?
                                        <Button onClick={() => {
                                            addItem(product, itemsQty)
                                            setGoToCart(true)
                                        }} variant="outline-dark">Agregar al carrito</Button>
                                        :
                                        <div className='d-flex'>
                                        <Link to={'/products'}>
                                        <Button variant="outline-dark" className='me-3'>volver</Button>
                                        </Link>

                                        <Link to={'/cart'}>
                                        <Button variant="outline-dark">Ir al carrito</Button>
                                        </Link>
                                        </div>
                                    }
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail

{/* <Button onClick={() => addItem(product, itemsQty)} variant="outline-dark">Agregar al carrito</Button> */ }