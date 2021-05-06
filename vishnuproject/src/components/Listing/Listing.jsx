import React, { Component } from 'react'
import './Listing.css'
import {Link} from 'react-router-dom'

const url ="https://developerfunnel.herokuapp.com/hotellist"
export default class Listing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hotel:''
        }
    }
    renderHotel = (data) =>{
        const {hotel} = this.state
        if(data){
            return hotel.map((item)=>{
                return(
                    <div className="item">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src={item.thumb} alt="" className="Image"/>
                        </div>
                        <div className="col-sm-7">
                            <div className="hotel_name">
                                <Link to={`/details/${item._id}`}>{item.name}</Link>
                                <div className="city_name">{item.city_name}</div>
                                <div className="city_name">{item.locality}</div>
                                <div className="city_name">{item.address}</div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="cuisine">Room Type</div>
                            <div className="cuisine">Cost For Night</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="cuisine_data">
                                {item.type[0].name}
                            </div>
                            <div className="cuisine_data">Rs. {item.cost}</div>
                        </div>
                    </div>
                </div>
                )
            })
        }else{
            return(
                <img src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/Twilight-on-the-olympic-peninsula.gif" alt="" width='700px' height='700px'/>
            )
        }
    }
    render() {
        return (
            <div className="container-fluid container">
            <div className="main-heading">
                <div className="col-md-12">
                    {this.renderHotel(this.state.hotel)}
                </div>
            </div>
        </div>
        )
    }
    componentDidMount(){
        let TripId = this.props.match.params.id
       fetch(`${url}/${TripId}`,{method:'GET'})
       .then((res)=>res.json())
       .then((data)=>{
           //console.log(data)
           this.setState({hotel:data})
       })
       .catch((err)=>{
           console.log(err)
       })
    }
}
