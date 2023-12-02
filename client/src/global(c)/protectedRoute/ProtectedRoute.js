import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

//now useAuth is not a function anymore is a hook (leaves in the component lifecycle).
const useAuth = () => {
  // State to track whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if a token is present in localStorage
    const token = localStorage.getItem('token');
    console.log(token);
    // If a token is found, set isAuthenticated to true
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]); // Empty dependency array to run the effect only once when the component mounts

  return isAuthenticated;
};


const ProtectedRoutes = () => {
  const isAuth = useAuth();
  console.log(">>", isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};


export default ProtectedRoutes;