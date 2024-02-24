import React, { useContext, useRef } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Addcom.css'
import Gc from './Gc';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addcom = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    let tr=useRef()
    let obj=useContext(Gc)
    let navigate=useNavigate()
    let fun=()=>{
        let data={"text":tr.current.value,"rating":value,"_id":obj.logincon.pid,"uid":obj.logincon._id}
       axios.post("http://localhost:5000/addcom",data).then((res)=>{
        navigate("/")
       })

    }
  return (
    <div className='ratingcon'>

        <textarea  name="comdesc" ref={tr}>

        </textarea>
        <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
       <button onClick={fun}>submitcom</button> 
    </div>
  )
}

export default Addcom