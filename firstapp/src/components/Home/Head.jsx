import React, { Component } from 'react'
import Quicksearch from './Quicksearch'
import Search from './search'

class Head extends Component  {
    render (){
        return (
            <div>
                <Search/>
                <Quicksearch/>
            </div>
        )
    }
}
export default Head
