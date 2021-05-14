import React, { Component } from 'react'
import HOC from './HOC'

class Comments extends Component {
    render() {
        return (
            <div>
              <p>{this.props.CountNumber}</p>  
              <button onClick={this.props.handleClick}>Click to add a comment</button>
            </div>
        )
    }
}
const EnhancedComments = HOC(Comments,9)
export default EnhancedComments
