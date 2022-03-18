import axios from 'axios';
import React, { useState } from 'react'

export default function PersonForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/api/people", {firstName: firstName, lastName: lastName})
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("There was an error!", err))
        
        setFirstName("");
        setLastName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="fristName" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            <input type="submit" />
        </form>
    )
}
