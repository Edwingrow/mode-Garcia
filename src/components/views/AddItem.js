import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firestore/firebase';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';


const AddItem = () => {

    const [image , setImage] = useState(''); //imagen del Item
    const [categories, setCategories] = useState([])
    const [pictures, setPictures] = useState('') //Imagen del ItemDetail
    const onSubmit = (event) => {
        event.preventDefault();   
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const available_quantity = event.target.elements.available_quantity.value;
        addToFirebase(title, description, price, available_quantity)
    }

    const addToFirebase = async (title, description, price, available_quantity) => {

        let imageUrl = "" //Primera imagen
        if (typeof title !== 'undefined') {
            const storage = getStorage();
            const imageName = (+new Date).toString(36);
            const storageRef = ref(storage, `items/${imageName}`)
            const uploadTask = await uploadBytes(storageRef, image)
            imageUrl = await getDownloadURL(uploadTask.ref)
        }
        let pictures="" // Segunda imagen
        if (typeof title !== 'undefined') {
            const storage = getStorage();
            const imageName = (+new Date).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);
            const uploadTask = await uploadBytes(storageRef, image)
            pictures = await getDownloadURL(uploadTask.ref)
        }

        addDoc(collection(db, "items"), {
            title: title,
            description: description,
            price: price,
            available_quantity: available_quantity,
            atribute: "",
            category: "",
            url: imageUrl,
            urlPictures: pictures
        }).then(doc => {
            console.log("se creo el documento con el id",doc.id)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getDocs(collection(db, "items"))
        .then(docs => {
            let preCategories = []
            docs.forEach(doc => {
                preCategories.push({id: doc.id, ...doc.data()})
            })
            setCategories(preCategories)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);    
    return (
        <>
        <Container>
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre del producto" />
                <Form.Text className="text-muted">
                        Agrega un nombre significativo para el producto
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Precio" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="available_quantity">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" placeholder="Stock" />
            </Form.Group>                    
            <Form.Group controlId="file" onChange={(e)=>{setImage(e.target.files[0])}} className="mb-3">
                <Form.Label>1ra Imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="file" onChange={(e)=>{setPictures(e.target.files[1])}} className="mb-3">
                <Form.Label>2da Imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>            
            <Button variant="primary" type="submit">
                Agregar
            </Button>
            </Form>
        </Container>
       <ItemDetailContainer productos={categories}/>
       </>
    );
    
}

export default AddItem;
