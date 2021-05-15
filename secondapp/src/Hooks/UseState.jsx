import React, { useState } from 'react'

export default function UseState() {
    const [name,setName]= useState('Vishnu')
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=>{setName("Yuvi")}}>Click</button>
        </div>
    )
}
