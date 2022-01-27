import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProducts } from "../services/products"; //Api call
import Loading from "../components/Loading";
import { Container } from 'react-bootstrap';
const ItemDetailContainer = ({ product }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    getProducts("lavadoras").then((item) => {

      if (mounted) {
        setProductos(item.results);
        setTimeout(() => {
          setLoading(false)

        }, 2000);
      }
    })

  },[])
  return (
    <>
      {loading ? <Loading /> : null}
      <Container>
        {productos.map((product, index) => (
         
        <ItemDetail key={index} product={product} />
        ))}
      </Container>
    </>
  );


}
export default ItemDetailContainer;
