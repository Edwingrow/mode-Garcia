import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { items } = useContext(CartContext);
    
  return (<div style={{ position: 'relative' }} className="CartWidget">
            <i className="fas fa-shopping-cart">{items.length}</i>
    </div>)
}

export default CartWidget
