import React, { Component } from 'react'

const url = "https://jsonplaceholder.typicode.com/users"
export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'User Text Here',
            value:''
             
        }
    }
    handleChange=(e)=>{
        this.setState({title:e.target.value?e.target.value:'User Text Here'})
    }
    handleData=(data)=>{
        if(data){
            return this.state.value.map((item)=>{
                return (
                    <div key={item.id}>
                        <div  className='card'>
                            <pre>
                                <h2>Name:{item.name}</h2>
                                <h5>UserName:{item.username}</h5>
                                <p>E-mail:{item.email}</p>
                                <p>Street:{item.address.street}</p>
                                <p>City:{item.address.city}</p>
                                <h5>Phone:{item.phone}</h5>
                                <h6>Website:{item.website}</h6>
                            </pre>
                        </div>
                        
                    </div>
                )
            })
        }else{
            return <div>Loading....</div>
        }
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <input type="text" onChange={this.handleChange} />
                <h4>{this.state.title}</h4>
                {this.handleData(this.state.value)}
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({value:data})})
    }
}
