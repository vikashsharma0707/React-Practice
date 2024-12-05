import { useRef, useState } from "react";



const Useref1=()=>{

    const [input,setinput] =useState("")
    const data = useRef("")

    const colorChange=()=>{
        data.current.style.backgroundColor = "blue"
    }

    return(
        <>



        <input ref={data}   type="text" value={input} onChange={(e)=>{setinput(e.target.value)}} /><br/><br/>
        <button  onClick={colorChange}>Data</button>
        
        </>
    )
}


export default Useref1;