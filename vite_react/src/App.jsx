import { useState } from "react"

function App() {
  
  let [count,setcount] = useState(15)

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
    <button onClick={addvalue}>Add Points : {count}</button>
    <br/>
    <button onClick={minusvalue}>Minus Points {count}</button>
     
    </>
  )
}

export default App
