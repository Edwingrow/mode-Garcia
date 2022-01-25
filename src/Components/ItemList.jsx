import React,{useEffect} from 'react';
import Item from "./Item"
const ItemList = ({productos}) => {
    const data1 = { id: 1, title: "producto 1", price: "price 1", image: "https://picsum.photos/201", stock: 10 }
    const data2 = { id: 2, title: "producto 2", price: "price 2", image: "https://picsum.photos/203", stock: 9 }
    const data3 = { id: 3, title: "producto 3", price: "price 3", image: "https://picsum.photos/205", stock: 20 }
    const data4 = { id: 4, title: "producto 4", price: "price 4", image: "https://picsum.photos/206", stock: 50 }
    const datos = [data1, data2, data3, data4]
    const [producto, setProducto] = React.useState([])
    useEffect(() => {
        setProducto(datos)
    }, [])
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 2000)
    })

  return <>
    <Item productos={producto}/>
  </>;
};

export default ItemList;
