import React from 'react'
import { useParams } from 'react-router'

export default function OneParam(props) {
    const {any} = useParams();

    return (
    <>
        <p>
        {
            (isNaN(any))
            ? "The word is: "  + any
            : "The number is: " + any
        }
        </p>
    </>
    )
}
