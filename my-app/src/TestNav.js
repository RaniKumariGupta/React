import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>
    <ul className='d-flex bg-primary'>
        <li><Link to='/' className='text-white'>Home</Link></li>
        <li><Link to='/test' className='text-white'>Demo</Link></li>
       
    </ul>
    </>
  )
}

export default TestNav