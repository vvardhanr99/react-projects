import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css'

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"
export default class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             details:''
        }
    }
    render() {
        const {details} = this.state
        return (
            <div className='container card'> 
                <ul className="list-group">
                    <li className="list-group-item active heading" aria-current="true"><h1>{details.name}</h1></li>
                </ul>
                    <figure className="figure">
                        <img src={details.thumb} alt=""  className="figure-img img-fluid rounded" style={{width:'1200px',height:'600px'}}/>
                        <figcaption className="figure-caption">{details.locality}</figcaption>
                    </figure>
                    <div className="card-body">
                        {details.address}
                    </div>
                    <div className="card" style={{width: "10rem"}}>
                        <div className="card-header">
                           <h5>Cost:  {details.cost}</h5> 
                        </div>
                    </div>
                <h3>{details.city_name}</h3>
                <div className='content'>
                        <Link to={`/bookingdetails/${details.name}`} className='btn btn-success'>Proceed </Link> &nbsp;
                        <Link to='/home' className='btn btn-danger'>Cancel </Link>
                        
                </div>
                <Tabs>
                    <TabList>
                    <Tab>Address</Tab>
                    <Tab>Phone</Tab>
                    </TabList>

                    <TabPanel>
                    <p>{details.address}</p>
                    </TabPanel>
                    <TabPanel>
                    <h2>9876543210</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
    componentDidMount(){
        let HotelId = this.props.match.params.id
        fetch(`${url}/${HotelId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data)
           // console.log(data[0].cost)
            this.setState({details:data[0]})
            
            sessionStorage.setItem('cost',data[0].cost)
        })
}
}
