import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  function increment() {
    console.log(`count before: ${count}`)
    setCount(count => count + 1);
    console.log(`count after once: ${count}`)
    setCount(count => count + 1)
    console.log(`count after twice: ${count}`)
  }

  console.log(`count out of function: ${count}`)

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
