import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useHistory } from 'react-router-dom';


export default function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    let history = useHistory();

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(product => {
            if(isMounted){
                setProduct(product.data[0])
            }
        })
        .catch(err => console.log("Error: ", err))

        return () => {isMounted = false};
    })

    function handleDelete(){
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => console.log("deleted: ", res))
            .catch(err => console.log("Error: ", err));
        history.push('/home');
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>
                <Link to={`/products/update/${id}`}>Update</Link>
            </p>
            <p>
                <a onClick={handleDelete} href="#">Delete</a>
            </p>
        </div>
    )
}
