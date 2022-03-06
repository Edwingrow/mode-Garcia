import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { collection, writeBatch, addDoc, Timestamp, doc } from 'firebase/firestore'
import { db } from '../../firestore/firebase'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';
import Loading from '../views/Loading'
const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({
        name: "", email: "", emailConfirm: "", phone: ""
    })
    const { items, totalBuy, deleteCart } = useContext(CartContext)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const generarOrden = (e) => {
        e.preventDefault();
        setCreatingOrder(true)
        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalBuy()

        order.items = items.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price
            const qty = cartItem.qty
            return { id, title, price, qty }
        })


        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setCreatingOrder(false)
                updateStock()
                deleteCart()
                setFormData({
                    name: "", email: "", emailConfirm: "", phone: ""
                })
            })

        function updateStock() {
            const batch = writeBatch(db)

            order.items.map(el => {
                let updateDoc = doc(db, 'items', el.id)
                let currentStock = items.find(item => item.id === el.id).stock

                batch.update(updateDoc, {
                    stock: currentStock - el.quantity
                })
            })

            batch.commit()
        }
    }

    return (
        <>
            {
                creatingOrder
                    ?
                    <>
                        <Loading />
                        <container>
                            <h1>Generando orden...</h1>
                        </container>
                    </>
                    :
                    orderId
                        ?
                        <>
                            <container className='container-orden'>
                                <div className="py-5 text-center mt-5">
                                    <h2 className="mt-5">¡Gracias por elegirnos!</h2>
                                    <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
                                    <strong>El ID de tu compra es {orderId}</strong><br />
                                    <Link className="btn btn-outline-dark bg-gradient mt-5" to={`/`}>
                                        <strong>Volver al inicio</strong>
                                    </Link>
                                </div>
                            </container>
                        </>
                        :
                        <>
                            <Container className='check'>
                                <Form onSubmit={generarOrden} onChange={handleChange} >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ingresa Nombre</Form.Label>
                                        <Form.Control type="text" name="name" defaultValue={formData.title} placeholder="Ingresa Nombre" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ingresa Email</Form.Label>
                                        <Form.Control type="email" name="email" defaultValue={formData.email} placeholder="Ingresa email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Repite Email</Form.Label>
                                        <Form.Control type="email" name="emailConfirm" defaultValue={formData.emailConfirm} placeholder="Repite el email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ingresa Telefono</Form.Label>
                                        <Form.Control type="text" name="phone" defaultValue={formData.phone} placeholder="Ingresa Telefono" />
                                    </Form.Group>
                                    <Button variant="outline-dark" type="submit"
                                    disabled={!formData.name || !formData.phone || !formData.email || formData.email !== formData.emailConfirm || items.length == 0}
                                    >
                                        Enviar Compra
                                    </Button>

                                </Form>
                            </Container>
                        </>
            }
        </>

    )
};

export default Checkout


