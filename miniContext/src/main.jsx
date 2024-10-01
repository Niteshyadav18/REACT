import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/userContext.jsx'
// import Display from './Display.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserContextProvider>
        <h1>HELLO NITESH</h1>
        <Login />
        <Profile />
      </UserContextProvider>
      {/* <Display /> */}
      
  </React.StrictMode>,
  
)