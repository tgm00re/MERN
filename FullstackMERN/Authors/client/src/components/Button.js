import React from 'react'

export default function Button(props) {
    const { _id } = props; 

    

    return (
        <button className="btn btn-primary" onClick={() => props.clickFunction(_id)}>{props.text}</button>
    )
}
