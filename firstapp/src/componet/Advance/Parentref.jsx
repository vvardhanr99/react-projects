import React, { Component } from 'react'
import Childref from './Childref'

export default class Parentref extends Component {
    constructor(props) {
        super(props)
    
        this.inpref = React.createRef()
    }
    handleClick=()=>{
        this.inpref.current.focus()
    }
    render() {
        return (
            <div>
                <h1>Parent Ref</h1>
                <Childref ref={this.inpref}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
