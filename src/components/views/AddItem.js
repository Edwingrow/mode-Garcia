import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firestore/firebase';


const AddItem = () => {

    const [image , setImage] = useState('');
    const [categories, setCategories] = useState([])

    const onSubmit = (event) => {
        event.preventDefault();   
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        addToFirebase(title, description, price)
    }

    const addToFirebase = async (title, description, price) => {

        let imageUrl = ""
        if (typeof title !== 'undefined') {
            const storage = getStorage();
            const imageName = (+new Date).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);

            const uploadTask = await uploadBytes(storageRef, image)
            imageUrl = await getDownloadURL(uploadTask.ref)
        }

        addDoc(collection(db, "items"), {
            title: title,
            description: description,
            price: price,
            category: "",
            url: imageUrl
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
                <Form.Control as="textarea" rows={3} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Precio" />
            </Form.Group>
            <Form.Select controlId="category" aria-label="Selecciona una categoria">
                <option>Selecciona una categoria</option>
                <option id='MLA1051'>Celulares y telefonos</option>
                <option id='MLA1648'>Computación</option>
                <option id='MLA1144'>Consolas y Videojuegos</option>
            </Form.Select>            
            <Form.Group controlId="file" onChange={(e)=>{setImage(e.target.files[0])}} className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>            
            <Button variant="primary" type="submit">
                Agregar
            </Button>
            </Form>
        </Container>
    );
}

export default AddItem;
