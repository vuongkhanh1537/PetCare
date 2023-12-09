import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Header from './Header'

export const Home = () => {
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
