import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(props) {
        super(props)
    
        this.inputref = React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus();
    }
    render() {
        return (
            <div>
              <input type="text" ref={this.inputref}  />  
            </div>
        )
    }
}
