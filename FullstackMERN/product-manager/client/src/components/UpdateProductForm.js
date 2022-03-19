import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom"

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


    function handleSubmit(e){
        e.preventDefault();

        //Will use axios to update with new form info.
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title: title, price: price, description: description})
            .then(res => console.log("Response: ",res))
            .catch(err => console.log("Error: ", err))
        
        history.push(`/products/${id}`);
    }


    return (
        <div>
            <h1>Update a product!</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </p>
                <p>
                    <input type="submit"/>
                </p>
            </form>
        </div>
    )
}
