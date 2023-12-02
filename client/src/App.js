import {Routes, Route, useNavigate} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import Login from './page/login/Login';
import { Home } from './components/Home';
import Dashboard from './page/dashboard/Dashboard';
import Employee from './page/employee/Employee';
import AddEmployee from './page/employee/AddEmployee';
import UpdateEmployee from './page/employee/UpdateEmployee';
import Product from './page/product/Product';
import AddProduct from './page/product/AddProduct';
import UpdateProduct from './page/product/UpdateProduct';

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
