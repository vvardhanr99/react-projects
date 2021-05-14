import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portals extends Component {
    render() {
        return ReactDOM.createPortal(
            <h1 className='container'>Hello</h1>,
            document.getElementById("portals")
        )
    }
}
