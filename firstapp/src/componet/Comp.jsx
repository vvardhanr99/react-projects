import React, { Component } from 'react'

export default class Comp extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.data.unit}</h4>
                <button onClick={this.props.data.changeUnit("Child comp Unit")}>Click Here</button>
            </div>
        )
    }
}
