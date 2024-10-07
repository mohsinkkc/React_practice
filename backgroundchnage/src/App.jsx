import { useState } from "react";

function App() {
const [color,setcolor] = useState("Olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0"> 
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl"> 
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}} onClick={() => {setcolor("Red")}} >RED</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Blue"}} onClick={()=>{setcolor("Blue")}}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Green"}} onClick={()=>{setcolor("Green")}}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Yellow"}} onClick={()=>{setcolor("yellow")}}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Black ",color:"white"}} onClick={()=>setcolor("Black")} >Black </button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Orange"}} onClick={()=>setcolor("Orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Grey"}} onClick={()=>setcolor("Grey")}>Grey</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Lavender"}} onClick={()=>setcolor("Lavender")}>Lavender</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Pink"}} onClick={()=>setcolor("Pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Purple"}} onClick={()=>setcolor("Purple")}>Purple</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Brown"}} onClick={()=>setcolor("Brown")}>Brown</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
