import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const CartItem = ({ item, deleteCartById}) => {
    const {id, title, price, url,qty} = item

    
    return (
        <article className="cart-item-card">
            <div className="cart-item__img">
                <img src={url} />
            </div>
            <h2 className="cart-item__name">{title}</h2>
            <span className="cart-item__price">${price}</span>
            <span className="cart-item__qty"><strong>Cantidad:</strong> {qty}</span>
            <span className="cart-item__qty"><strong>Total:</strong> ${price*qty}</span>
            <Button onClick={()=>deleteCartById(id)} >Borrar</Button>
            <Link to={'/checkout'}>
            <Button variant="primary">Check-Out</Button>
            </Link>
        </article>
    )
}

export default CartItem