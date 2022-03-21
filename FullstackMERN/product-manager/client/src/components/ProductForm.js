import React, { useState } from 'react'
import axios from 'axios';


export default function ProductForm(props) {
    const [title, setTitle] = useState(props.initialTitle);
    const [price, setPrice] = useState(props.initialPrice);
    const [description, setDescription] = useState(props.initialDescription);

    function handleSubmit(e){
        e.preventDefault();
        props.submitFunction({title: title, price: price, description: description});
        setTitle("");
        setPrice(0);
        setDescription("");
    }



    return (
        <div>
            <h1>{props.message}</h1>
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
