// import { useMemo, useState } from "react";



// const Usememo=()=>{

//     const [count,setcount] =useState(0)
//     const [show,setshow] =useState(true)

//     const countdata=(num)=>{
//          for(let i=0;i<10000000;i++){

//          }

//          return(num)
//     }

//      const checkdata = useMemo(()=>{
//               return countdata(count)
//      },[count])

//     // const checkdata = countdata(count)
//     return(
//         <>
//         <h1>{checkdata}</h1>
//         <button onClick={()=>{setcount(count+1)}}>Add</button>
//         <button  onClick={()=>{setshow(!show)}}>
//            {show? "you clicked me":"add data"}
//         </button>



        
//         </>
//     )
// }


// export default Usememo;

import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Simulate a heavy computation (e.g., factorial or sum)
  const computeExpensiveValue = (num) => {
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoize the computed value to avoid recalculation on unrelated state changes
  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(count);
  }, [count]);

// const memoizedValue = computeExpensiveValue(count)

  return (
    <>
      <h1>Computed Value: {memoizedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>
    </>
  );
};

export default UseMemoExample;
