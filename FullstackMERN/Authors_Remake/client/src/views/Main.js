import axios from 'axios';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import AuthorUpdateForm from '../components/AuthorUpdateForm';


export default function Main() {

    function createAuthor(e, author){
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/create", author)
            .then(response => console.log(response))
            .catch(err => console.log("There was an error: ", err))
    }

    


    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <div className="p-4 container bg-secondary">
                <Routes>
                    <Route exact path="/">
                        <Link to="/create/author" className="text-warning">Create An Author</Link>
                        <h2 className="mt-5">Authors</h2>
                        <AuthorList/>
                    </Route>
                    <Route exact path="/create/author">
                        <AuthorForm submitFunction={createAuthor} initialName={""}/>
                    </Route>
                    <Route exact path="/update/author">
                        <AuthorUpdateForm/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}
