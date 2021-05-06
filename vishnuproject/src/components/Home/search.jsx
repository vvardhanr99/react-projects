import React, { Component } from 'react'
import './head.css'
const url="https://developerfunnel.herokuapp.com/location"
const hotel ="https://developerfunnel.herokuapp.com/hotels?city="
export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             hotel:''
        }
    }
    renderData = (data) =>{
        const {title} = this.state
        if(data){
            return title.map((item)=>{
                return (
                        <option key={item._id} value={item.city}>
                               {item.city_name}
                        </option>
                )
            })
        }else{
            return(
                <div>
                    Loading..
                    {/*<img src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/Twilight-on-the-olympic-peninsula.gif" alt="" width='700px' height='700px'/>*/}
                </div>
            )
        }
    }
    renderhotel = (data) =>{
        const {hotel} = this.state
        if(data){
            return hotel.map((item)=>{
                return (
                        <option key={item._id} value={item.city}>
                              {item.name}  | {item.city_name}
                        </option>
                )
            })
        }else{
            return(
                <div>
                    Loading..
                    {/*<img src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/Twilight-on-the-olympic-peninsula.gif" alt="" width='700px' height='700px'/>*/}
                </div>
            )
        }
    }
    rendered = (e)=>{
        //console.log(e.target.value)
        const cityid = e.target.value;
        fetch(`${hotel}${cityid}`,{method:'Get'})
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data)
            this.setState({hotel:data})
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='sub-container'>
                    <p id='heading'>Welcome to Our Page</p>
                    <div className="name">
                    <p>V!</p>
                    </div>
                    <div className='drop-down'>
                     <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  onChange={this.rendered}>
                        <option value="">---Select City----</option>
                        {this.renderData(this.state.title)}
                    </select>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="">---Select Hotel ---</option>
                        {this.renderhotel(this.state.hotel)}
                    </select>   
                    </div>
                    
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data)
            this.setState({title:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
