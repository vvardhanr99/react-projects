import React, { Component } from 'react'

export default class File extends Component {
    constructor(props) {
        super(props)
    
        this.inputref = React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
    }
    render() {
        return (
            <React.Fragment>
                <h3><input type="text"  ref={this.inputref} /></h3>
            </React.Fragment>
        )
    }
}
