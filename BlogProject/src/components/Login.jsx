import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {login } from "../store/authSlice"
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux';
import authService from "../appwrite/auth"
import {useForm} from 'react-hook-form'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            await authService.login(data)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>Login</div>
  )
}

export default Login