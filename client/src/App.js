import {Routes, Route, Outlet} from 'react-router-dom';
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
import Order from './page/order/Order';
import AddOrder from './page/order/AddOrder';
import UpdateOrder from './page/order/UpdateOrder';
import OnlyReadOrder from './page/order/OnlyReadOrder';
import HomeProduct from './page/product/HomeProduct';
import HomeEmployee from './page/employee/HomeEmployee';

function App() {

  return (<> 
      <Routes>
        <Route path="/login" element={<Login/>}  />

        <Route path="/" element={<Home/>}>
          <Route index element={<Dashboard/>} />
          <Route path="/san_pham" element={<HomeProduct />}>
            <Route index element={<Product />} />
            <Route path="add" element={<AddProduct />} /> 
            <Route path=":id" element={<UpdateProduct />} />
          </Route>
          <Route path="nhan_vien" element={<HomeEmployee />}> 
            <Route index element={<Employee/>} /> 
            <Route path="add" element={<AddEmployee/>} />
            <Route path=":id" element={<UpdateEmployee />} />
          </Route>
          <Route path="don_hang" element={<Outlet />}>
            <Route index element={<Order/>} />
            <Route path='add' element={<AddOrder />} />
            <Route path='update/:id' element={<UpdateOrder />} />
            <Route path='view/:id' element={<OnlyReadOrder />} />
          </Route>
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
