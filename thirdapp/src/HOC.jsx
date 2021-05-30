import React, { Component } from 'react'

const HOC = (OrginalComponent,data)=>{
    return class extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:data
            }
        }
        handleCount=()=>{
            this.setState({count:this.state.count +1})
        }
        render() {
            return (
                <div>
                    <OrginalComponent count={this.state.count} handleCount={this.handleCount}/>
                </div>
            )
        }
    }
}
export default HOC
