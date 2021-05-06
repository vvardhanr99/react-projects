import React from 'react'

export default function Footer(props) {
    //console.log(props)
    
    return (
        <div>
            <hr/>
            <center><h5 >&copy; Vishnu  {props.year} {props.month}</h5></center>
        </div>
    )
}
