import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Vishnu'
        }
}
componentDidMount(){
    setInterval(() => {
       this.setState({name:'Vishnu'}) 
    }, 2000);
}
    render() {
        console.log(" Component" + this.state.name)
        return (
            <div>
               <p>{this.state.name}</p>
            </div>
        )
    }
}