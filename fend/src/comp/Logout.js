import React, { useContext, useEffect } from 'react'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  let obj=useContext(Gc)
  let navigate=useNavigate()
  useEffect(()=>{
obj.fun({"token":"","_id":"","name":"","role":""})
navigate("/")
  },[])
  return (
    <div></div>
  )
}

export default Logout