import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/config'
import { logout } from '../store/authSlice'


function Logoutbtn() {
    const dispatch = useDispatch()
  return (
    <div>Logoutbtn</div>
  )
}

export default Logoutbtn