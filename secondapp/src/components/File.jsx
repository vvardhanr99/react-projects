import React, { Component } from 'react'
import Childref from './Childref'

export default class File extends Component {
    constructor(props) {
        super(props)
    
        this.inputref = React.createRef()
    }
    handleClick=()=>{
        this.inputref.current.focus()
    }
    render() {
        return (
            <React.Fragment>
             <Childref ref={this.inputref}/>
              <button onClick={this.handleClick}>Click</button>
            </React.Fragment>
        )
    }
}
