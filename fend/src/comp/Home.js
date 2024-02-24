import axios from 'axios'
import Gc from './Gc'
import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    let [data,setData]=useState([])
    let obj=useContext(Gc)
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5000/getprod").then((res)=>{
            setData(res.data)
        })

    },[])
    let addcart=(item)=>{
        if(obj.logincon.token=="")
        {
            navigate("/login")
        }
        else
        {
            item={...item}
           
            let data={"pid":item._id,"uid":obj.logincon._id}
            delete item['_id']
            delete item['comm']
            data={...data,...item,"total":item.price}
          axios.post("http://localhost:5000/cart/add",data).then((res)=>{
            navigate("/cart")
          })
        }

    }
    let fun=(pid)=>{
      obj.fun({...obj.logincon,"pid":pid})

    }

  return (
    <div className='con'>
        {
            data.map((item,index)=>{
                return(<div className='prodcard'>
                    <div className='pimg'><img src={`http://localhost:5000/img/${item.img}`}/></div>
                    <h1>Name:{item.name}</h1>
                    <p>Desc:{item.desc}</p>
                    <p>Cat:{item.cat}</p>
                    <h2>Price:{item.price}</h2>
                    <button onClick={()=>addcart(item)}>Addcart</button>
                   {obj.logincon.token!=""&& <button onClick={()=>fun(item._id)}><Link to="/addcom">Addcom</Link></button>}
                    </div>)
            })
        }

    </div>
  )
}

export default Home