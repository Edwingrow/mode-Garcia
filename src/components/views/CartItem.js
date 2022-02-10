import React from 'react'
const CartItem = ({ item }) => {
    const {title, price, thumbnail,qty} = item

    
    return (
        <article className="cart-item-card">
            <div className="cart-item__img">
                <img src={thumbnail} />
            </div>
            <h2 className="cart-item__name">{title}</h2>
            <span className="cart-item__price">${price}</span>
            <span className="cart-item__qty"><strong>Cantidad:</strong> {qty}</span>
            <span className="cart-item__qty"><strong>Total:</strong> ${Math.round(price*qty)}</span>

        </article>
    )
}

export default CartItem