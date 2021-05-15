import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [value,setData]= useState([])
    useEffect(()=>{
        fetch(url,{methos:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
        })
    },[])
    const renderData=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <div>
                        <div style={{'border':'1px solid blue','margin':'5px'}}>
                           <pre>{item.name}</pre>
                            <pre>{item.username}</pre> 
                        </div>
                        
                    </div>
                )
            })
        }
    }
    return (
        <div>
          {renderData(value)}
        </div>
    )
}
