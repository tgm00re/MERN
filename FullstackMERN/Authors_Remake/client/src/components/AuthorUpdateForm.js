import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AuthorForm from './AuthorForm'
import axios from 'axios';

export default function AuthorUpdateForm() {
    const {_id} = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(product => {
            if(isMounted){ 
                setName(product.data.name)
            }
        })
        .catch(err => console.log("Error: ", err))

        return () => {isMounted = false};
    }, [])


    function updateAuthor(author){
        
    }

    return (
        <AuthorForm submitFunction={updateAuthor}/>
    )
}
