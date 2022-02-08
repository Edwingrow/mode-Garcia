import { useState, createContext } from "react";

export const CartContext = createContext();

export const  CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

        const addItem = (contador) => {
            setItems([...items, contador])
        }
    return (
        <CartContext.Provider value={{ items, addItem}}>
            {children}
        </CartContext.Provider>
    )

}