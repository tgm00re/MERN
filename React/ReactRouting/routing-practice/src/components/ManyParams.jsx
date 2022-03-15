import React from 'react'
import { useParams } from 'react-router'

export default function ManyParams() {
    const {word, color, bgColor} = useParams();

    return (
        <div style={{color: color, backgroundColor: bgColor, textAlign: 'center'}}>
            <h1>{word}</h1>
        </div>
    )
}
