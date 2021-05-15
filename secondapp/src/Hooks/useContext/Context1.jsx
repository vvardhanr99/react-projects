import React from 'react'
import {MessagesContext} from './Context2'
export default function Context1() {
    return (
        <div>
            <h1>Context</h1>
            <MessagesContext.Consumer>
                {(value)=><div>
                    {value.username}    
                </div>}
            </MessagesContext.Consumer>
        </div>
    )
}
