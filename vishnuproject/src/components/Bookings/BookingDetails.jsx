import React, { Component } from 'react'

export default class BookingDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date:'',
             cost:sessionStorage.getItem('cost'),
             hotel:this.props.match.params.name
        }
    }
    
    render() {
        //console.log(props)
        return (
            <div className='container'>
               Booking Page Loading..... 
               <p>Date and Time is: {this.state.date}</p>
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
