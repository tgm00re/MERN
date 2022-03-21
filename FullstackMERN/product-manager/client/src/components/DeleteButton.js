import React from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

export default function DeleteButton(props) {
    let history = useHistory();


    function handleDelete(){
        axios.delete(`http://localhost:8000/api/products/delete/${props.id}`)
            .then(res => console.log("deleted: ", res))
            .catch(err => console.log("Error: ", err));
        history.push('/home');
    }


    return (
        <a onClick={handleDelete} href="#">Delete</a>
    )
}
