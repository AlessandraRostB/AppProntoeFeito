import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useForm} from "./useForm"
import axios from "axios"
import {BASE_URL} from "../constants/url"


export const useUserOperations = (initinalForm, path) =>{

    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [form, onChangeForm] = useForm(initinalForm)
    
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('login')
        }
    },[navigate])

    const hadleSubmit = (e)=>{
        e.preventDefault()

        //const credentials = {email, password}

        axios.post(`${BASE_URL}${path}`, form)
        .then(response =>{
            alert(response.data.message)
            localStorage.setItem('token', response.data.token)
            setMessage(response.data.message)
            navigate('/login')
            
        })
        .catch(error => console.log(error))
            
    }

    return{
        form,
        onChangeForm,
        hadleSubmit,
        message: message
    };
}