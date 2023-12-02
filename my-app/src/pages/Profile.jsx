import React from 'react'
import { isAuthenticated } from '../auth/authIndex'

const Profile = () => {
    const{user}=isAuthenticated()
  return (
    <>
    <h1>Name:{user.name}</h1>
    <h1>Email:{user.email}</h1>
    
    </>
  )
}

export default Profile