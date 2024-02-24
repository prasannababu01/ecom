import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addprod = () => {
  let [data,setData]=useState({})
  let navigate=useNavigate()
  let fun=(e)=>{
    if(e.target.name!='img')
    {
    setData({...data,[e.target.name]:e.target.value})
    }
    else{
      setData({...data,[e.target.name]:e.target.files[0]})

    }
}

let add=()=>{
  let fd=new FormData()
  for(let p in data)
  {
    fd.append(p,data[p])
  }
  axios.post("http://localhost:5000/add",fd).then((res)=>{
navigate("/")
  }).catch((err)=>{
    console.log(err)
  })
}

  return (<div className='logincon'>
  <div className='login'>
      <input type='text' placeholder='enter prodname' name="name" onChange={fun}/>
      <input type='text' placeholder='enter cat' name="cat" onChange={fun}/>
      <input type='text' placeholder='enter desc' name="desc" onChange={fun}/>
      <input type='text' placeholder='enter price' name="price" onChange={fun}/>
      <input type='file' name="img" onChange={fun}/>

      <button onClick={add}>Add</button>
  </div>
  </div>
   
  )
}

export default Addprod