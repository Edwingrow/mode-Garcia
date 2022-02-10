import { useState, createContext } from "react";

export const CartContext = createContext();

export const  CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const cartItems = () => { //Es para el carrito
        return items.length
    }

 
    const addItem = (producto, qty) => {
        if(items.some(it => it.id === producto.id)){
            let index = items.findIndex(it => it.id === producto.id)
            let product = items[index]
            product.qty =product.qty + qty
            const newItems = [...items]
            newItems.splice(index, 1, product)
        } else{
            let product = {...producto, qty}
            setItems([...items, product])
        }
    }


    const deleteCart = () => {
        setItems([]);
    }
    return (
        <CartContext.Provider value={{ items, cartItems, addItem, deleteCart}}>
            {children}
        </CartContext.Provider>
    )

}