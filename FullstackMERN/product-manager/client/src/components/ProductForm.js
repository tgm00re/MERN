import React, { useState } from 'react'
import axios from 'axios';

export default function ProductForm(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", {title: title, price: price, description: description})
            .then(res => {console.log("Responsee: ", res)})
            .catch(err => console.log("There was an error: ", err))

        setTitle("");
        setPrice(0);
        setDescription(0);
    }


    return (
        <div>
            <h1>Create a product!</h1>
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
