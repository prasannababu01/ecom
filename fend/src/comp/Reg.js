import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reg = () => {
  let [data,setData]=useState({})
  let [err,setErr]=useState("")
  let navigate=useNavigate()

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
let reg=()=>{
  axios.post("http://localhost:5000/adduser",data).then((res)=>{
    if(res.data.err==undefined)
    {
      navigate("/login")

    }
    else{
      setErr(res.data.err)
    }
  })
}
  return (
    <div className='logincon'>
    <div className='login'>
       {err!=""&& <h2 style={{"color":"orangered"}}>{err}</h2>}
        <input type='text' placeholder='enter email' name="_id" onChange={fun}/>
        <input type='text' placeholder='enter name' name="name" onChange={fun}/>
        <input type='password' placeholder='enter password' name='password' onChange={fun}/>
        <button onClick={reg}>Register</button>
    </div>
    </div>
  )
}

export default Reg