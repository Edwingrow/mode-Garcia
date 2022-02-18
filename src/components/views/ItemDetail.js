import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import {CartContext} from '../../context/CartContext'
const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { title, description, price, sold_quantity, attributes, url, available_quantity } = product
  const [itemsQty, setItemsQty] = useState(1)
  const [atributos, setAtributos] = useState(attributes)
  let precioCuotas = price/6
  let precioCuotas2 = precioCuotas.toFixed(3)
  return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Card className="mb-10">
                        <Card.Header>
                            <nav className="header-navigation">
                            <Link to="/" className="btn btn-link">Volver atras</Link>

                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Ropa</Breadcrumb.Item>
                                <Breadcrumb.Item active>Remera</Breadcrumb.Item>
                            </Breadcrumb>

                            <div className="btn-group">
                                <Link to="/" className="btn btn-link btn-share">Compartir</Link>
                                <Link to="/" className="btn btn-link">Vender un producto como este</Link>
                            </div>
                            </nav>
                        </Card.Header>
                        <Card.Body className="store-body">
                            <Row>
                                <Col xs={7} className="product-info">
                                    <img src={url}/>
                                    <Col className
                                    me="product-seller-recommended">
                                        <Col className="product-description mb-5" style={{ textAlign: 'left' }}>
                                            <h5 className="mt-3 mb-4">Lo que tenés que saber de este producto</h5>
                                            <ol>
                                                {
                                                    atributos.map(atributo => {
                                                        return <li key={atributo.id}>{atributo}</li>
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
                                    <p className="text-success"><i className="fa fa-credit-card"></i> 6x ${precioCuotas2} sin interés </p>
                                    <p className="mb-0"><i className="fa fa-truck"></i> Tipo de Garantia</p>
                                    <label htmlFor="quant">Cantidad</label>
                                    <div className="mb-3">
                                        <ItemCount itemsQty={itemsQty} available_quantity={available_quantity} setItemsQty={setItemsQty} />
                                    </div> 
                                    <Button onClick={() => addItem(product, itemsQty)} variant="primary">Agregar al carrito</Button>
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
