import React, { Component } from 'react'
import Comp from './Comp'

export default class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             unit:'Kg'
        }
    
    }
        changeUnit=(item)=>{
        this.setState({unit:item})
    }
    render() {
        return (
            <div>
                <h1>Pass data From child to Parent</h1>
                <Comp data={{
                    unit:this.state.unit,
                    changeUnit:this.changeUnit
                
                }}/>
            </div>
        )
    }
}
