import React from 'react'
import { BrowserRouter, Routes,Route ,NavLink,Navigate} from 'react-router-dom';
import {Students}from '../componetes/Students';
import {Home}from '../componetes/Home';
import {About}from '../componetes/About';
import logo from '../logo.svg';
function Navation() {
  return (
    <BrowserRouter>
    <nav>
        <img src={logo} alt="" />
        <li>
          <NavLink to='/home' className={({isActive}) => isActive ? 'nav-active':''}>
            Home
          </NavLink> 

        </li>
        <li><NavLink to='/about' className={({isActive}) => isActive ? 'nav-active':''}>
            About
          </NavLink> </li>
        <li><NavLink to='/student' className={({isActive}) => isActive ? 'nav-active':''}>
            Students
          </NavLink> </li>
      </nav>
    <Routes>
      
   
    <Route path='about' element={<About/>} />
    <Route path='student' element={<Students/>} />
    <Route path='home' element={<Home/>} />
    <Route path='/*' element={<Navigate to='/home' replace/> } />


  
    
    </Routes>
    </BrowserRouter>
    
  )
}

export {Navation}