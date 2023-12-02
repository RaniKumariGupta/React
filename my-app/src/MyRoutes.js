import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import TestCart from './redux/TestCart'
import EmailVerify from './auth/EmailVerify'
import Profile from './pages/Profile'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './admin/Dashboard'
import AddCategory from './admin/AddCategory'
import Category from './admin/Category'
import AddProduct from './admin/AddProduct'
import ShowProduct from './admin/ShowProduct'
import UpdateProduct from './admin/UpdateProduct'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='signup' element={<Register/>}/>
            <Route path='email/confirmation/:token' element={<EmailVerify/>}/>
            <Route path='productdetails/:product_id' element={<ProductDetails/>}/>
            <Route path='products' element={<Product/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='forgetpassword' element={<ForgetPassword/>}/>
            <Route path='reset/password/:token' element={<ResetPassword/>}/>
          </Route>
         <Route path='context/api' element={<Show/>}/>
         <Route path='redux/cart' element={<TestCart/>}/>

          {/* admin */}
          <Route path='admin/' element={<AdminRoute/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='addcategory' element={<AddCategory/>}/>
            <Route path='category' element={<Category/>}/>
            <Route path='addproduct' element={<AddProduct/>}/>
            <Route path='product' element={<ShowProduct/>}/>
            <Route path='updateproduct/:productId' element={<UpdateProduct/>}/>
          </Route>

        </Routes>
    </Router>
  )
}

export default MyRoutes