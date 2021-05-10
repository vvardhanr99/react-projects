import React from 'react'

export default function Home1() {
    
    return (
        <div>
           <a onClick={this.props.onClick}>Click me</a>
        </div>
    )
}



{/*var Child = React.createClass({
    render: function() {
      <a onClick={this.props.onClick}>Click me</a>
    }
  });
  
  var Parent = React.createClass({
    onClick: function(event) {
      // event.component.props ?why is this not available?
    },
    render: function() {
      <Child onClick={this.onClick} />
    }
  });*/}
