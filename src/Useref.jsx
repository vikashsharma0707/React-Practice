import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";



const Useref=()=>{
    const [input,setinput] =useState("")
    const count = useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    })
    return(
        <>
        <h1>This is useref page</h1>

        <input type="text" onChange={(e)=>{setinput(e.target.value)}} />
        <h1>{count.current}</h1>
        </>
    )
}

export default Useref;