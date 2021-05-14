import React, { Component } from 'react'
import HOC from './HOC'

class Likes extends Component {
    render() {
        return (
            <div>
                <p>{this.props.CountNumber}</p>
                <button onClick={this.props.handleClick}>Add A Like</button>
            </div>
        )
    }
}
const EnhancedLikes = HOC(Likes,5)
export default EnhancedLikes;
