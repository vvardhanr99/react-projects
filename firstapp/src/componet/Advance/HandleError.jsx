import React, { Component } from 'react'

export default class HandleError extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Error:'',
            ErrorInfo:''
        }
    }
    componentDidCatch(error,errorinfo){
        console.log(error,errorinfo)
    }
    render() {
          return (
            <div>
               Error Occured At UI 
            </div>
        )  
        
    }
}
