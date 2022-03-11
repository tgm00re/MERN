import React,{useContext} from 'react'
import MyContext from '../contexts/context';

export default function Navbar() {
    const context = useContext(MyContext);

    return (
        <h1>Hello, {context.name}</h1>
    )
}
