import React, { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'
export default function Login() {
    const [title,setTitle]= useState([])
    useEffect(()=>{
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>{setTitle(data)})
    },[])
    const renderData=(data)=>{
        if(data){
            return title.map((item)=>{
                return(
                    <div key={item.id}>
                        <pre><i>{item.name}</i></pre>
                    </div>
                )
            })
        }
        
    }
    return (
        <div>
           {renderData(title)} 
        </div>
    )
}
