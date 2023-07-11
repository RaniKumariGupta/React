import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './TestItem'
import Student from './Student'

const TestCart = () => {
    const data=useSelector(store=>store.cart)
  return (
     <>
   <h2>The total number of item in the cart is {data.cartCount}</h2>

   <TestItem/>
   <Student/>
     </>
  )
}

export default TestCart