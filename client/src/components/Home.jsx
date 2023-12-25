import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Header from './Header'

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/login");
    }
  }, []);
  return (
  <>
    <Topbar />  
    <div className='app'>
      <Sidebar /> 
      <Outlet />
    </div>
  </> 
  ) 
}  
