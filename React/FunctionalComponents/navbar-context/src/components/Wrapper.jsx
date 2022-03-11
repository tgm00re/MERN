import React, { useState } from 'react'
import MyContext from '../contexts/context'
import FormWrapper from './FormWrapper'
import Navbar from './Navbar';

export default function Wrapper({children}) {
    const [name, setName] = useState("");


    return (
        <MyContext.Provider value={{name, setName}}>
            {children}
        </MyContext.Provider>
    )
}
