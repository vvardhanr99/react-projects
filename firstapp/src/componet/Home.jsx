import React, { PureComponent } from 'react'
import Home1 from './Home1'

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    render() {
        console.log("Pure Components")
        return (
            <div>
               <pre>{this.state.count}</pre> 
               <Home1/>
            </div>
        )
    }
    componentDidMount(){
        setInterval(this.setState({count:0}),2000)
    }
}
