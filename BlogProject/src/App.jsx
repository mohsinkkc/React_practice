import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authSerivce from "./appwrite/auth"
import './App.css'
import {login,logout} from "./store/authSlice"

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


  return (
    <>
      <h1>Blog App</h1>
    </>
  )
}

export default App
