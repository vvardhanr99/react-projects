import React from 'react'

const Childref=React.forwardRef((props,ref) => (
        <div>
           <h4>Child Ref</h4>
           <input type="text" ref={ref} /> 
        </div>
    ));


export default Childref
