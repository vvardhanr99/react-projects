import React, { Component } from 'react'
import { BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
//import Footer from './Footer'
import Home from './components/Home/Home'
import Listing from './components/Listing/Listing'
import Details from './components/Details/Details'
import BookingDetails from './components/Bookings/BookingDetails'

export default class Routing extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                <BrowserRouter>
               <Header/>
               <Route path='/' exact component={Home}/>
               <Route path='/home' exact component={Home}/>
               <Route path='/list/:id'  component={Listing}/>
               <Route path='/details/:id'  component={Details}/>
               <Route path='/bookingdetails/:name'  component={BookingDetails}/>
               </BrowserRouter> 
                </div>
               
            </div>
        )
    }
}
