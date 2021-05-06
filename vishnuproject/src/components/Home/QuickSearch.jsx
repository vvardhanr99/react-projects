import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import './head.css'

const url = "https://developerfunnel.herokuapp.com/booking"
export default class QuickSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             booking:'',
        }
    }
    renderBooking = (data) =>{
        const {booking} = this.state
        if(data){
            return booking.map((item)=>{ 
                return (
                    <div key={item._id}>
                        <Link className='link' to={`/list/${item.trip}`} >
                            <div className="card" style={{width: "18rem"}}>
                                <img src={item.image} className="card-img card-img-top" alt="TypeOfHotel - Images"/><br/>
                                <p className='card-text'>{item.trip}</p> 
                                <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Enjoy with our {item.name} Type. And Make Your Trip Awesome</p>
                                </div>
                            </div>  
                        </Link>
                     </div>
                )
            })
        }else{
            return(
                <div>Loading.....</div>
            )
        }
    }
    render() {
        return (
            <div className='container'>
                <h3>Types of Booking</h3>
                {this.renderBooking(this.state.booking)}
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data)
            this.setState({booking:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}



