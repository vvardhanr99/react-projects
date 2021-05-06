import React, { Component } from 'react'
import { BrowserRouter , Route} from 'react-router-dom'
import Footer from './Footer'
import Head from './Home/Head'
import Header from './Header'
import Login from './Login'

export default class Home extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Header/>
                <Route exact path ='/' component={Head}/>
                <Route path='/head' component={Head}/>
                <Route path='/login' component={Login}/>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}
