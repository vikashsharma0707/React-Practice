import React, { useState, useEffect } from 'react';


const UseEffect1=()=>{
    const [count, setCount] = useState(0);

  // UseEffect to update the document title whenever 'count' changes
  useEffect(() => {
    document.title = `You clicked ${count} times  `;
  }, [count]); // Dependency array includes 'count' to trigger effect when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}


export default UseEffect1;
