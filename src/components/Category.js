import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import { collection, getDocs, doc, getDoc} from 'firebase/firestore'
import { db } from '../firestore/firebase'
const Category = ({Category}) => {
    const [productos, setProductos] = useState([]);
    const [setLoading] = useOutletContext();
    useEffect(() => {
      let mounted = true
      setLoading(true)
      const getProductFromFirebase = async () => {
        const qry = collection(db, "items")
        const snapshot = await getDocs(qry)
  
        const docRef = doc(db, "items", Category)
        const docSnapshot = await getDoc(docRef)
        if(mounted){
          setProductos(docSnapshot.data())
          setTimeout(()=>{
            setLoading(false)
          },3000)
        }
      }
      getProductFromFirebase()
      return () => mounted = false
    }
      , [Category])
      return (
        <div>     
          <ItemListContainer products={productos} />
        </div>
      );
};

export default Category;
