import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authSerivce from "./appwrite/auth"
import './App.css'
import {login,logout} from "./store/authSlice"
import {Header,Footer} from "./components"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authSerivce.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch (login({userData}))
      }
      else{
        dispatch (logout())
      }
    })
    .finally(() => setLoading(false))
  },[])
 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap bg-gray-400 content-between'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
    </div>

    
  ):null
}

export default App
