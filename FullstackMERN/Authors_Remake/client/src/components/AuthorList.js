import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button';




export default function AuthorList() {

    let history = useHistory();
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/authors/`)
        .then(response => {
            if(isMounted){
                setAuthors(response.data)
            }
        })
        .catch(err => console.log("Something went wrong! ", err))
        return () => { isMounted = false }
    }, [authors])

    function handleDelete(_id, author){
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`, author)
            .then(response => console.log("Updated: ", response))
            .catch(err => console.log("Error: ", err))
    }

    function handleUpdate(_id, author){
         history.push(`/update/author/${_id}`)

        // axios.put(`http://localhost:8000/api/authors/update/${_id}`, author)
        //     .then(response => console.log("Updated: ", response))
        //     .catch(err => console.log("Error: ", err))
    }


    return (
        <table className="table bg-dark text-light">
    <thead>
    <tr>
        <th scope="col">Author</th>
        <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
        {authors.sort((item1, item2) => {
        if(item1.name < item2.name){
            return -1;
        } else if(item1.name > item2.name){
            return 1;
        } else {
            return 0;
        }
        }).map((item, i) => {
            return(
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>
                        <Button clickFunction={() => handleUpdate(item._id)} text={"update"}/>
                        <Button clickFunction={handleDelete} _id={item._id} text={"delete"}/>
                    </td>
                </tr>
            )
        })}
    </tbody>
</table>
    )
}
