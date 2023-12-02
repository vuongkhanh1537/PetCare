import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './global/homePage/Home';
import Employee from './admin/page/employee/Employee';
import Login from './global/login/Login';
import Dashboard from './admin/page/dashboard/Dashboard'
import Product from './admin/page/product/Product';
import Service from './admin/page/service/Service';
import { useState } from 'react';
import ProtectedRoute from './global/protectedRoute/ProtectedRoute';
import UpdateProduct from './admin/page/product/UpdateProduct';
import AddProduct from  './admin/page/product/AddProduct';
import AddService from './admin/page/service/AddService';
import AddEmployee from './admin/page/employee/AddEmployee';
import UpdateEmployee from './admin/page/employee/UpdateEmployee';
import { ToastContainer} from 'react-toastify';
import UpdateService from './admin/page/service/UpdateService';

function App() {

  return (<>
      <Routes>
        <Route path="/login" element={<Login/>}  />

        <Route path="/" element={<Home/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/san_pham" element={<Product />} />
          <Route path="/san_pham/:id" element={<UpdateProduct />} />
          <Route path="/san_pham/add" element={<AddProduct />} />
          <Route path="/nhan_vien" element={<Employee/>} />
          <Route path="/nhan_vien/add" element={<AddEmployee/>} />
          <Route path="/nhan_vien/:id" element={<UpdateEmployee />} />
        </Route>
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
  </>);
}

export default App;
