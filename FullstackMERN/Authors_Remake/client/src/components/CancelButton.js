import React from 'react'
import Button from './Button'
import { useHistory } from 'react-router'

export default function CancelButton() {
    let history = useHistory();
    function handleCancel(){
        history.push('/');
    }

    return (
        <Button clickFunction={handleCancel} text={"cancel"}/>
    )
}
