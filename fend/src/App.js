import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './comp/Nav'
import Login from './comp/Login'
import Cart from './comp/Cart'
import Addprod from './comp/Addprod'
import Logout from './comp/Logout'
import Home from './comp/Home'
import Reg from './comp/Reg'
import './App.css'
import Gc from './comp/Gc'
import Addcom from './comp/Addcom'

const App = () => {
  let [logincon,setLogin]=useState({"token":"","_id":"","name":"","role":""})
  let fun=(obj)=>{
    setLogin(obj)
  }
  let obj={"logincon":logincon,"fun":fun}
  return (
    <BrowserRouter>
    <Gc.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/addprod' element={<Addprod/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path="/addcom" element={<Addcom/>}/>
          </Routes>
    </Gc.Provider>
    </BrowserRouter>
  )
}

export default App