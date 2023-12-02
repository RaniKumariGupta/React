import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { isAuthenticated } from './authIndex'


const PrivateRoute = () => {
  return (
    isAuthenticated() && isAuthenticated().user.role===0 ?
    <>
    <Outlet/>
    </>
    :
        <Navigate to='/login'/>
    
  )
}

export default PrivateRoute