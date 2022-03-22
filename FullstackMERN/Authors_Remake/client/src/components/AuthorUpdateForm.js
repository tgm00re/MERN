import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AuthorForm from './AuthorForm'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AuthorUpdateForm(props) {
    const {_id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [found, setFound] = useState(false)

    useEffect(() => {
        let isMounted = true;
        console.log(`http://localhost:8000/api/authors/${_id}`);
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(response => {
            console.log(response);
            if(isMounted && !Object.keys(response.data).includes('error')){ 
                setName(response.data.name)
                console.log("setting found to true!")
                setFound(true);
            }
        })
        .catch(err => console.log("Error: ", err))

        return () => {isMounted = false};
    }, [])


    function updateAuthor(e, author){
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${_id}`, author)
            .then(res => console.log("Response: ", res))
            .catch(err => {
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; //Get the errors from err.response.data
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    console.log(found);

    return (
        <div>
            {found ? <AuthorForm submitFunction={updateAuthor} initialName={name} errors={errors}/> 
            : <p> Sorry, that author can't be found!<br/>Please Return home or<br/>
                        <Link to="/create/author" className="text-warning">Create An Author</Link>
            </p>}
            
        </div>
    )
}
