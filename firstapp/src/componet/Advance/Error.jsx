import React, { Component } from 'react'

export default class Error extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handleClick=()=>{
        this.setState({count:this.state.count +1})
    }
    render() {
        if(this.state.count === 5){
            throw new Error("Error")
        }else{
            return (
                <div>
                   {this.state.count} <br />
                   <button onClick={this.handleClick}>Click to Increment</button>
                </div>
            )
        }
    }
}
