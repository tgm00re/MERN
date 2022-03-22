import axios from 'axios';
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import AuthorUpdateForm from '../components/AuthorUpdateForm';
import { useState } from 'react';


export default function Main() {

    //create arraya to store errors from the API
    const [errors, setErrors] = useState([]);

    function createAuthor(e, author){
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/create", author)
            .then(response => console.log(response))
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

    


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <div className="p-4 container bg-secondary">
                <Switch>
                    <Route exact path="/">
                        <Link to="/create/author" className="text-warning">Create An Author</Link>
                        <h2 className="mt-5">Authors</h2>
                        <AuthorList/>
                    </Route>
                    <Route exact path="/create/author">
                        <AuthorForm submitFunction={createAuthor} initialName={""} errors={errors}/>
                    </Route>
                    <Route exact path="/update/author/:_id">
                        <AuthorUpdateForm/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
