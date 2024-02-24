import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let [data,setData]=useState({})
    let [err,setErr]=useState("")
    let obj=useContext(Gc)
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let login=()=>{
        axios.post("http://localhost:5000/login",data).then((res)=>{
            if(res.data.token!=undefined)
            {
            obj.fun(res.data)
            navigate("/")
            }
            else
            {
                setErr(res.data.err)
            }

        })
    }
  return (<div className='logincon'>
    <div className='login'>
       {err!=""&& <h2 style={{"color":"orangered"}}>{err}</h2>}
        <input type='text' placeholder='enter email' name="_id" onChange={fun}/>
        <input type='password' placeholder='enter password' name='password' onChange={fun}/>
        <button onClick={login}>Login</button>
    </div>
    </div>
  )
}

export default Login