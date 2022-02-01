import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import {getCategory} from '../services/products';
import ItemListContainer from './containers/ItemListContainer';

const Category = () => {
    const [productos, setProductos] = useState([]);
    const [setLoading] = useOutletContext();
    const { id } = useParams();
    useEffect(() => {
        let mounted = true
        setLoading(true)
        if (typeof id !== 'undefined') {    
            getCategory(id).then(items => {
                if(mounted) {
                    setProductos(items.results)

                    setTimeout(() => {
                      setLoading(false)
                    }, 3000)
                }
              })          
        }
        return () => mounted = false;
      }, [id])
    
      return (
        <div>     
          <ItemListContainer products={productos} />
        </div>
      );
};

export default Category;
