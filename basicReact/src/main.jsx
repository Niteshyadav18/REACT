import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nitz from './nitz.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nitz />
    
    <App />
  </StrictMode>
)
