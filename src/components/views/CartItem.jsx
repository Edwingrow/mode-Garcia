import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
const CartItem = () => {
    const cartContext = useContext(CartContext);
    const { items, deleteCart, deleteCartById, totalBuy} = cartContext;
    
    return (
        items.length > 0 ? 
        <div className="cart">
             <div className="row mt-4 justify-content-center text-center">
                <div className="col-lg-3 col-sm-3"></div>
                <h5 className="col-lg-3 col-sm-3">Nombre:</h5>
                <h5 className="col-lg-2 col-sm-2">Precio:</h5>
                <h5 className="col-lg-1 col-sm-1">Cantidad:</h5>
                <h5 className="col-lg-2 col-sm-2">Total:</h5>
                <div className="col-lg-1 col-sm-1"></div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center">
                {items.map(item => 
                    <div className="row align-items-center" key={item.id}>
                        <div className="col-lg-3 col-sm-3">
                            <img src={item.url} style={{width:150}}></img>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h5>{item.title}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5>${item.price}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <h5>{item.qty}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5>${
                            (item.qty * item.price)}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <button className="btn btn-outline-dark bg-gradient" onClick={() => deleteCartById(item.id)}>Eliminar</button>
                        </div>
                        <hr></hr>
                    </div>
                )}
                <h3><b>Precio Total:</b></h3>
                <h4 className="text-center"><b>${totalBuy()}</b></h4>
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn btn-outline-dark bg-gradient me-3" onClick={deleteCart}>Vaciar Carrito</button>
                    <Link to="/checkout">
                        <button className="btn btn-outline-dark bg-gradient ms-3">Procesar Compra</button>
                    </Link>
                </div>
            </div>
        </div> : <div>
        <p>No hay productos en el carrito</p>
        <Link to="/products">
            <button  className="btn btn-outline-dark bg-gradient me-3"> Volver al Inicio</button>
         </Link>   
        </div>
            
    )
}

export default CartItem


