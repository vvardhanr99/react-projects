import React, { useRef } from 'react'

export default function Useref() {
    const inputref = useRef(null)
    const handleClick=()=>{
        inputref.current.focus()
    }
    return (
        <div>
           <input type="text" ref={inputref}/> 
           <button onClick={handleClick}>Click</button>
        </div>
    )
}
