import { useState } from "react"

function App() {
  
  let [count,setCount] = useState(0)

  const addvalue = ()=>{
    if (count < 20)
    {
      setcount(count + 1)
    console.log("clicked",count);
    }
    
  }
  
  const minusvalue = () =>{
    if (count > 0)
    {
    setcount(count - 1)
    console.log("clicked",count)
    }
  }
  return (
    <>
    <h1>The Score is {count}</h1>
    <br/>
    <button onClick={() => setCount(count + 1)}>Add Points : {count}</button>
    <br/>
    <button onClick={() => setCount(count - 1)}>Minus Points {count}</button>
     
    </>
  )
}

export default App
