import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

const HomeEmployee = () => {
  const [top, setTop] = useState(false);
  return (
    <Outlet context={[top, setTop]} />
  )
}

export default HomeEmployee