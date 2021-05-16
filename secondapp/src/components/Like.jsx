import React, { Component } from 'react'
import HOC from './HOC'

class Like extends Component {
    render() {
        return (
            <div>
                <h4>Likes</h4>
               <p>{this.props.counter}</p> 
               <button onClick={this.props.handleClick}>Clicked {this.props.counter}</button>
            </div>
        )
    }
}
const EnhancedLikes = HOC(Like)
export default EnhancedLikes
