import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* component is a function that returns jsx */}
  </StrictMode>,
)
//render is update (change in UI) and mount (first time render) both are same in react 18