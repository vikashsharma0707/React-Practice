import { useEffect, useState } from "react"



const UseEffect=()=>{

    const [count,setcount] = useState(0)

    //This will run continuesly
    // useEffect(()=>{
    //    setTimeout(()=>{
    //     setcount(count+1)
    //    })
    // })


// This will run only one time
    // useEffect(()=>{
    //     setTimeout(()=>{
    //      setcount(count+1)
    //     })
    //  },[])



    // This will run after one second
     useEffect(()=>{
        setTimeout(()=>{
         setcount(count+1)
        },1000)
     })



    return(
        <>
        <h1>This is useeffect first example</h1>
        <h1>value is : {count}</h1>
        </>
    )

}

export default UseEffect