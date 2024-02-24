import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Gc from './Gc'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  let [data,setData]=useState([])
  let obj=useContext(Gc)
  let navigate=useNavigate()
  let [ctotal,setctotal]=useState(0)
  let getcart=()=>{
    axios.get(`http://localhost:5000/cart/get/${obj.logincon._id}`).then((res)=>{
      setData(res.data)
      let c=0
      for(let i=0;i<res.data.length;i++)
      {
        c=c+res.data[i].total
      }
      setctotal(c)
    })
  }
  useEffect(()=>{
    if(obj.logincon.token=="")
    {
  navigate("/")
    }
    else{
    getcart()
    }

  },[])
  let inc=(cid,qty)=>{
    if(qty<5)
    {
    axios.get(`http://localhost:5000/cart/inc/${cid}`).then(()=>{
      getcart()
    })
  }
  }

  let dec=(cid,qty)=>{
    if(qty>1)
    {
    axios.get(`http://localhost:5000/cart/dec/${cid}`).then(()=>{
      getcart()
    })
  }
  }
  let del=(cid)=>{
    axios.delete(`http://localhost:5000/cart/del/${cid}`).then(()=>{
      getcart()
    })

  }
  return (<>
  {data.length==0&&<h1>Your cart is empty</h1>}
   {data.length!=0&& <div className='con'>
    {
        data.map((item,index)=>{
            return(<div className='prodcard'>
                <div className='pimg'><img src={`http://localhost:5000/img/${item.img}`}/></div>
                <h1>Name:{item.name}</h1>
                <p>Desc:{item.desc}</p>
                <p>Cat:{item.cat}</p>
                <h2>Price:{item.price}</h2>
                <div> <button onClick={()=>dec(item._id,item.qty)}>-</button>{item.qty}<button onClick={()=>inc(item._id,item.qty)}>+</button></div>
                <p>Total:{item.total}</p>
                <button onClick={()=>del(item._id)}>Delfromcart</button>
                
                </div>)
        })
    }

</div>}
{data.length!=0&&<div>Total:{ctotal}</div>}
 </> )
}

export default Cart