import React, { createContext } from 'react'
import Context1 from './Context1';

export const MessagesContext = createContext();
export default function Context2() {
    return (
        <div>
            <MessagesContext.Provider value={{username:'Vishnu'}}>
            <Context1/>
            </MessagesContext.Provider>
            
        </div>
    )
}
