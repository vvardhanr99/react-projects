import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <Link className="navbar-brand" to="/">ABC</Link>
                        </div>
                        <ul className="nav navbar-nav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login"> LogIn</Link></li>
                        <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
