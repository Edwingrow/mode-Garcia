import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem.js';
import {Button } from 'react-bootstrap'
const CartListItem = () => {

    const cartContext = useContext(CartContext);
    const { items, deleteCart, deleteCartById } = cartContext;

    return (
        <div className="list-cart-container">
            {
                items ? (items.map(item => {
                    return (<CartItem key={item.id}
                        item={item}
                        deleteCartById={deleteCartById}
                    />)

                }))
                    : <p>Cargando Productos</p>
            }
            {items.length ? (<Button 
                            variant="primary"
                            onClick={deleteCart}
                      >Vaciar Carrito</Button>)
                         : <p>No hay productos en el carrito</p>
            }
        </div>
    )
}

export default CartListItem
