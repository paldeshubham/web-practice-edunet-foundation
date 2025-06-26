import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
 import './index.css'
import First from './Components/First.jsx'
import Second from './Components/Second.jsx'
import Third from './Components/Third.jsx'
import Fourth from './Components/Fourth.jsx'
import Fifth from './Components/Fifth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <First/>
    <Second/>
    {/* <Third/> */}
    <Fourth/>
    <Fifth/>
    
  </StrictMode>,
)
