import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from '../views/CartItem';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firestore/firebase';
import { Container, Form, Button} from 'react-bootstrap';
const Checkout = () => {
    const { items } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [orderId, setOrderId] = useState("");
    const [ success, setSuccess ] = useState(false);
    const [date, setDate] = useState(new Date());
    const generarOrden = (event) => {
        if(items.length ===0){
            alert("No hay productos en el carrito")
            return generarOrden()
        }
        event.preventDefault()
        const byer = { name, email, phone }

        const ordenCompra = items.map(item => {
            const id = item.id
            const title = item.title
            const price = item.price
            const qty = item.qty
            const total = (item.price * item.qty)
            return { id, title, price, total }

        })
        const dateTime = setDate(date.toLocaleString())

        const order = { byer, ordenCompra,date }
        addDoc(collection(db, 'Orders'), order)
            .then(doc => {
                setOrderId(doc.id)
                console.log("se realizo la orden de compra ", doc.id)
            })
            .catch(err => {
                console.log("errror", err)
            })
    }
    return (
        <Container>
            <Form onSubmit={generarOrden}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresa Nombre</Form.Label>
                    <Form.Control type="text" value={name}  onChange={(e) => setName(e.target.value)} placeholder="Ingresa Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresa Email</Form.Label>
                    <Form.Control type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Repite Email</Form.Label>
                    <Form.Control type="email" value={emailValid}  onChange={(e) => setEmailValid(e.target.value)} placeholder="Repite el email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresa Telefono</Form.Label>
                    <Form.Control type="text" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="Ingresa Telefono" />
                </Form.Group>
                {
                    items.length ===0 ? <p>No hay productos en el carrito</p> : <Button variant="outline-primary" type="submit">
                    Enviar Compra
                </Button>
                }
            </Form>
            {
                success ? <p>Orden de compra {orderId}</p> : null
                
            }
        </Container>
        
    )
};

export default Checkout
