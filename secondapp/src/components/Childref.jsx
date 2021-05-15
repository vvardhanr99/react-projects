import React from 'react'
import { forwardRef } from 'react'
const Childref = forwardRef((props,ref)=>(
    <div>
        <h4>Child Ref</h4>
        <input type="text" name="" id=""  ref={ref}/>
    </div>
));
export default Childref;