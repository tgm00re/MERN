import {React, useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get("http://localhost:8000/api/products")
            .then(products => {
                if(isMounted){
                    setProducts(products.data);
                }
            })
            .catch(err => console.log("Error: ", err))
            return () => {isMounted = false};
        })

        

    return (
        <>
            <h1>All Products</h1>
            <ul>
                {products.map((item, i) => {
                    return (<li key={i}>
                        <Link to={`/products/${item._id}`}><h2>{item.title}</h2></Link>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}
