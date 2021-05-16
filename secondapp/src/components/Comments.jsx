import React, { Component } from 'react'
import HOC from './HOC'

class Comments extends Component {
    render() {
        return (
            <div>
                <h3>Comments</h3>
               <p>{this.props.counter}</p> 
               <button onClick={this.props.handleClick}>Clicked {this.props.counter}</button>
            </div>
        )
    }
}
const EnhancedComments = HOC(Comments)
export default EnhancedComments
