import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [top, setTop] = useState(false);
  return <Outlet context={[top, setTop]}/> ;
}

export default Home;