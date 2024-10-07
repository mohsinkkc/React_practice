import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 rounded-xl p-4 text-center text-black'>Hey Guys</h1>
     <Card username=" Mohsin" Desigination="Developer"/>
     <Card />

     
    </>
  )
}

export default App
