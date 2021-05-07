import React, { Component } from 'react'
import {BrowserRouter,Route , Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './componet/Home'
import Login from './componet/Login'

export default class Routing extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BrowserRouter>
                <Route path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}
