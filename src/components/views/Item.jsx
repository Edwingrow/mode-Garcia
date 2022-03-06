import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({ productos }) => {
  const { title, price, url } = productos

  return (
    <div className='col-md-4'>
      <div className='card mt-5'>
        <div className='card-img'>
        <img src={url} className="img card-img-products" />
         </div>
        <div className="card-body text-center">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-text">${price}</h5>
        </div>
        <div className="card-footer text-center">
          <Link to={`/productos/${productos.id}`}>
            <button className="btn btn-outline-dark">Ver Más</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Item
