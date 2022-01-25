import React, { useEffect } from 'react';
import ItemList from './ItemList';
const ItemListContainer = ({productos}) => {
  const [producto, setProducto] = React.useState([])
  const data1 = { id: 1, title: "producto 1", price: 2000, image: "https://picsum.photos/201", stock: 10 }
  const data2 = { id: 2, title: "producto 2", price: 1352, image: "https://picsum.photos/203", stock: 9 }
  const data3 = { id: 3, title: "producto 3", price: 100, image: "https://picsum.photos/205", stock: 20 }
  const data4 = { id: 4, title: "producto 4", price: 50000, image: "https://picsum.photos/206", stock: 50 }
  const datos = [data1, data2, data3, data4]
  useEffect(() => {
    const promise = new Promise((resolve) => {
       setTimeout(() => {
          resolve(datos)
        }, 2000)
    })
    promise.then(data => {
      setProducto(data)
    })
  }, [])
  return <>
    <ItemList productos={producto} />
  </>

}
export default ItemListContainer;
