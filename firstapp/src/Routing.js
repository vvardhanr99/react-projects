import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './componet/Home'
import Login from './componet/Login'
import About from './componet/About'
import EnhancedLikes from './componet/Likes'
import EnhancedComments from './componet/Comments'
import HOC from './componet/HOC'
import Portals from './componet/Advance/Portals'
import Ref from './componet/Advance/Ref'
import Parentref from './componet/Advance/Parentref'
import Error from './componet/Advance/Error'
import HandleError from './componet/Advance/HandleError'

export default class Routing extends Component {
    render() {
        return ( 
        <div className = 'container' >
            <BrowserRouter>
            <Header />
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/login' component={Login}/>
            <Footer/>
            </BrowserRouter>
        </div>
        )
    }
}