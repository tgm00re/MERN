import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get('http://localhost:8000/api/players')
        .then(response => {
            if(isMounted){
                setPlayers(response.data)
            }
        })
        .catch(err => console.log("Error: ", err))
        return () => { isMounted = false }
    }, [players])

    function handleDelete(_id){
        axios.delete(`http://localhost:8000/api/players/delete/${_id}`)
            .then(response => console.log(response))
            .then(err => console.log("Error: ", err))
    }



    return (
        <>
            <nav>
                <h1 style={{textAlign: 'left'}}>
                    <span>List {"  "}</span>
                    | 
                    <span>{"  "}</span><Link to="/players/addplayer" style={{color: 'grey'}}>Add Player</Link>
                </h1>
            </nav>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Preffered Position</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {players.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.preferredPosition}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button></td>
                        </tr>
                    )
                })}
                
                </tbody>
            </table>
        </>
    )
}
