import { Outlet } from 'react-router-dom'
import React from 'react'

function Layout() {
  return (
      <>
       <div>Layout</div>
       <Outlet />
      </>
   
  )
}

export default Layout