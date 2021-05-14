import React from 'react'

const Home1 =(OriginalComponent,data)=>{
    return class extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 
            }
        }
        
       render(){
          return(
           <>
           <OriginalComponent/>
           </>
           
       )   
       }
      
    }
}
export default Home1
