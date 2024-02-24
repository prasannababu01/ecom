import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Gc from './Gc'

const Nav = () => {
  let obj=useContext(Gc)
  return (
    <nav>
        <Link to="/">Home</Link>
      {obj.logincon.token==""&&  <Link to="/login">Login</Link>}
      {obj.logincon.token==""&&    <Link to="/reg">Register</Link>}
      {obj.logincon.token!=""&&   <Link to="/cart">Cart</Link>}
      {obj.logincon.token!=""&&obj.logincon.role=='admin'&&   <Link to="/addprod">Addprod</Link>}
      {obj.logincon.token!=""&&   <Link to="/logout">Logout</Link>}
      {obj.logincon.token!=""&&   <h1>{obj.logincon.name}</h1>}
    </nav>
  )
}

export default Nav