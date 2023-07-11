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

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Register/>}/>
            <Route path='productdetails/:product_id' element={<ProductDetails/>}/>
            <Route path='products' element={<Product/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>
         <Route path='context/api' element={<Show/>}/>
         <Route path='redux/cart' element={<TestCart/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes