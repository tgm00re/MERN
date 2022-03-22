import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

export default function AddPlayer() {
    const [name, setName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("");
    const [errors, setErrors] = useState([]);
    let history = useHistory();


    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/create', {name: name, preferredPosition: preferredPosition, gameOneStatus: 0, gameTwoStatus: 0, gameThreeStatus: 0})
            .then(response => {
                console.log(response);
                history.push('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })

        setName("");
        setPreferredPosition("");
    }

    return (
        <>
            <nav>
                <h1 style={{textAlign: 'left'}}>
                    <Link to="/players/list" style={{color: 'grey'}}>List</Link>{"  "}
                    | 
                    <span>{"  "}Add Player</span>
                </h1>
            </nav>
            <form onSubmit={handleSubmit}>
                {errors.map((message, index) => <p key={index}>{message}</p>)}
            <div className="form-group">
                <label htmlFor="name">Name (Required, 2 or more characters)</label>
                <input type="text" className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="preferredPosition">Preferred Position (Optional)</label>
                <input type="text" className="form-control" name="preferredPosition" value={preferredPosition} onChange={e => setPreferredPosition(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </>
    )
}
