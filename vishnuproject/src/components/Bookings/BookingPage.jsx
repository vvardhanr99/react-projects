import React, { Component } from 'react'

export default class BookingPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }
    
    render() {
        console.log(this.props.list)
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Bookin Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Hotel Name</th>
                        <th scope="col">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
