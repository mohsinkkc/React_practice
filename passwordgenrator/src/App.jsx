import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword] = useState("")
  const [numberallow,setNumberallow] = useState(false)
  const [char,setChar] = useState(false)

  const passwordgen = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallow) str += "0123456789"
    if (char) str += "!@#$%^&*(){}[]?:/<>"

    for(let i = 0;i<= length;i++){
      let chara = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(chara)

      setPassword(pass)
    }
  },[length,setPassword,numberallow,char])

  useEffect( ()=>{passwordgen()},[length,numberallow,char])

  const passRef = useRef(null)

  const copypassword = useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)
  },[password]) 

  return (
    <>
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-3 my-8 text-orange-500 bg-gray-600'> 
      <h1 className='text-white text-center my-5'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='outline-none w-full py-1 px-3' type='text' value={password} placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypassword}>Copy</button>
      </div>
      <div className='text-sm flex gap-x-2'>
        <div className="flex item-center gap-x-1"> <input type='range' min={8} max={50} value={length} onChange={(e)=> {setLength(e.target.value)}} className='cursor-pointer' />
        <label>Length: {length}</label> </div>
      </div>
      <div className="flex item-center gap-x-1"> <input type='Checkbox'  defaultChecked={numberallow} onChange={()=> {setNumberallow((prev) => !prev)}} className='cursor-pointer' />
        <label>Number : {numberallow}</label> </div>
        <div className="flex item-center gap-x-1"> <input type='Checkbox'  defaultChecked={char} onChange={()=> {setChar((prev) => !prev)}} className='cursor-pointer' />
        <label>Character</label> </div>
    </div>
    </>
  )
}

export default App
