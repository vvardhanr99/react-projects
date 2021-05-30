import React, { Component } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users'
export default class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:''
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>this.setState({title:data}))
        .catch((err)=>console.log(err))
    }
    renderData=(data)=>{
        const {title} = this.state
        if(data){
            return title.map((item)=>{
                return(
                    <div>
                        <h2>{item.name}</h2>
                        <h4>{item.username}</h4>
                        <h5>{item.email}</h5>
                    </div>
                )
            })
        }else{
          return <p>Loading...</p>  
        }
    }
    render() {
        return (
            <div>
                {this.renderData(this.state.title)}
            </div>
        )
    }
}
