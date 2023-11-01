import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/homePage/Home';
import Employee from './pages/employee/Employee';
import Login from './pages/login/Login';
import Header from './features/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/employee" element={<Employee/>}  />
    </Routes>
    
    </div>

  );
}

export default App;
