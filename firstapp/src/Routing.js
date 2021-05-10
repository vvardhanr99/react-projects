import React, { Component } from 'react'
import {BrowserRouter,Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './componet/Home'
import Login from './componet/Login'
import About from './componet/About'

export default class Routing extends Component {
    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/about' component={About}/>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}
