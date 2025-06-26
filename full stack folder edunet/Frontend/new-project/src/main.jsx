import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Getmovie from './Component/Getmovie.jsx'
import Postmovie from './Component/Postmovie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <Postmovie/>
    <Getmovie/>
    
  </StrictMode>,
)
