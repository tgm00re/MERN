import React, { useContext, useState } from 'react'
import MyContext from '../contexts/context'
export default function Form() {
    const context = useContext(MyContext);
    const [currentName, setCurrentName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Current Name: " + currentName);
        context.setName(currentName);
        setCurrentName("");
    }
    

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" name="name" value={currentName}  onChange={e => setCurrentName(e.target.value)}/>
            <input type="submit" value="Submit Name"/>
        </form>
    )
}
