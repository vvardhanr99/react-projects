import React, { Component } from 'react'
import HOC from './HOC'

class Likes extends Component {
    render() {
        return (
            <div>
               <button onClick={this.props.handleCount}>Likes {this.props.count} </button>
            </div>
        )
    }
}
const EnhancedLikes = HOC(Likes,5)
export default EnhancedLikes
