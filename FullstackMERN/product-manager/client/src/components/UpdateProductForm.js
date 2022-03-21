import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom"
import ProductForm from './ProductForm';

export default function UpdateProductForm() {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    let history = useHistory();

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(product => {
            if(isMounted){ 
                setTitle(product.data[0].title)
                setPrice(product.data[0].price)
                setDescription(product.data[0].description)
            }
        })
        .catch(err => console.log("Error: ", err))

        return () => {isMounted = false};
    }, [])


    function updateProduct(product){
        
        //Will use axios to update with new form info.
        axios.put(`http://localhost:8000/api/products/update/${id}`, product)
            .then(res => console.log("Response: ",res))
            .catch(err => console.log("Error: ", err))
        
        history.push(`/products/${id}`);
    }

    return (
        <div>
            <ProductForm message={"Update a product!"} submitFunction={updateProduct} initialTitle={title} initialPrice={price} initialDescription={description}/>
        </div>
    )
}
