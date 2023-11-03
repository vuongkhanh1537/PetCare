import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './global/homePage/Home';
import Employee from './admin/page/employee/Employee';
import Login from './global/login/Login';
import Dashboard from './admin/page/dashboard/Dashboard'
import Product from './admin/page/product/Product';
import Service from './admin/page/service/Service'
 
function App() {
  return (
    <div className="App">
      <main className='content'>
        
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/san_pham" element={<Product />} />
          <Route path="/nhan_vien" element={<Employee/>} />
          <Route path="/dich_vu" element={<Service />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
