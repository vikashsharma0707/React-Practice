import { useState } from "react";



const Usestate=()=>{

    const [color,setcolor] = useState("")

    const changeColor=()=>{
        setcolor("blue")
    }
    return(
        <>
        <h1>This is second example of usestate</h1>
        <h1  style={{color:color}}>color is : {color}</h1>
        <button  onClick={()=>{setcolor("red")}}>click here</button>
        <button  onClick={changeColor}>Chane color</button>
        </>
    )
}

export default Usestate;