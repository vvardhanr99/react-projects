import React, { Component } from 'react'
import EnhancedLikes from './Likes'
import EnhancedComments from './Comments'
import Api from './Api'

export default class Routing extends Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
        
    }
    componentDidMount(){
        this.input.current.focus()
    }
    render() {
        return (
            <div>
               <input type="text" ref={this.input} />
               <EnhancedLikes/>
               <EnhancedComments/>
               <Api/>
            </div>
        )
    }
}
