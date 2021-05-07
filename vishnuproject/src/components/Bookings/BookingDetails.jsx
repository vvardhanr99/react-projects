import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const url="https://mocki.io/v1/639f247d-c421-44fc-82f2-49d502fa006b"
export default class BookingDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Booking_id:Math.floor(Math.random() * 100000),
             cost:sessionStorage.getItem('cost'),
             hotel:this.props.match.params.name,
             name:'',
             phone:''
        }
    }
    nameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    phoneChange=(e)=>{
        this.setState({phone:e.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/booking'))
    }
    render() {
        console.log(this.props)
        return (
            <div className='container'>
               <p>Date and Time is: {this.state.date}</p>
               <div className="form-group">
                    <label>Booking Id</label>
                    <input name="bookin_id" value={this.state.Booking_id}
                    className="form-control"
                    readOnly/>
                </div>
               <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="" id="" className='form-control' onChange={this.nameChange} />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" name="" id="" className='form-control' onChange={this.phoneChange} />
                </div>
               <div className="form-group">
                    <label>Hotel Name</label>
                    <input name="hotel" value={this.state.hotel}
                    className="form-control"
                    readOnly/>
                </div>
                <div className="form-group">
                    <label>Cost</label>
                    <input name="cost" value={this.state.cost}
                    className="form-control"
                    readOnly/>
                </div>&nbsp;
                <div>
                    <Link to='/booking' className='btn btn-success' onClick={this.handleSubmit}>Proceed Booking </Link>
                </div>
            </div>
        )
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({date:new Date().toLocaleString()})
        },1000)
    }
}
