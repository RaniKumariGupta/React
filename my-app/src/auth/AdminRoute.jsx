import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { isAuthenticated } from './authIndex'
import AdminSidebar from '../admin/AdminSidebar'

const AdminRoute = () => {
  return (
    isAuthenticated() && isAuthenticated().user.role===1 ?
    <>
    <AdminSidebar/>
    <Outlet/>
    </>
    :
        <Navigate to='/login'/>
  )
}

export default AdminRoute