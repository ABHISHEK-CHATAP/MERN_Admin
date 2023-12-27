import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Store/AuthProvider';

const Logout = () => {
    const {LogOutUser} = useAuth();

useEffect(()=>{
    LogOutUser();
},[LogOutUser])

  return (
   <>
   
   <Navigate to="/login" />
   <h1>Log Out Page</h1>
   
   </>
  )
}

export default Logout
