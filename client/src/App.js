import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './global/homePage/Home';
import Employee from './admin/page/employee/Employee';
import Login from './global/login/Login';
import Dashboard from './admin/page/dashboard/Dashboard'
import Topbar from './admin/page/global/Topbar';
 
function App() {
  return (
    <div className="App">
      <main className='content'>
        
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/employee" element={<Employee/>}  />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
