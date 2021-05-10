import React, { PureComponent } from 'react'
import Comp from './Comp';
export default class About extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Vishnu',
            count:0
        }
}
componentDidMount(){
    setInterval(() => {
       this.setState({name:'Vishnu'}) 
    }, 2000);
}
handleChange=()=>{
    this.setState({count:this.state.count +1})
}
render() {
        console.log("Pure Component"+ this.state.name)
        return (
            <div>
               <p>{this.state.name}</p>
               <Comp/>
               <p>{this.state.count}</p>
               <button onClick={this.handleChange}>Click to update Count</button>
            </div>
        )
    }
}
