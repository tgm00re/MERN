import React, { useEffect, useState } from 'react';

import axios from 'axios';
import PersonForm from '../components/PersonForm';

export default function Main(){
    const [peopleList, setPeopleList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then(res => setPeopleList(res.data.people))
        .catch(err => console.log(err))
    })


    return(
        <>
            <PersonForm/>
            {peopleList.map((item, i) => {
                return <p key={i}>First Name: {item.firstName}, Last Name: {item.lastName}</p>
            })}
        </>
    )
}