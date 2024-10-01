import React from 'react'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import UserContextProvider from './Context/UserContextProvider'

function Display() {
  

    return (
      <>
      <UserContextProvider>
        <h1>Hello nitesh</h1>
        <Login />
        <Profile />
      </UserContextProvider>
      </>
    );
  }
  
  export default Display;