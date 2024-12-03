import React,{useState} from 'react'
import authservice from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import login from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'

function Signup() {
    const dispatch = useDispatch()
    const {error,setError} = useState("")
    const navigate = useNavigate()  
    const {register,handleSubmit} = useForm()
  return (
    <div>Signup</div>
  )
}

export default Signup