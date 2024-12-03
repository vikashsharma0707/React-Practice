import { useState } from "react";



const Increment=()=>{

    const [value,setvalue] =useState(0)
    return(
      <>
  
      <h1>This is useState Example</h1>
      <h1>Value is :{value}</h1>
      <button onClick={()=>{setvalue(value+1)}}>Increment</button>
      <button onClick={()=>{setvalue(value-1)}}>Decrement</button>
      <button onClick={()=>{setvalue(0)}}>Reset</button>
      </>
    )
  }
  
  export default Increment;