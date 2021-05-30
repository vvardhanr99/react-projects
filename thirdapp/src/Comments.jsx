import React, { Component } from 'react'
import HOC from './HOC'

 class Comments extends Component {
    
    render() {
        return (
            <div>
               <button onClick={this.props.handleCount}>Comments {this.props.count} </button>
            </div>
        )
    }
}
const EnhancedComments = HOC(Comments,10)
export default EnhancedComments
