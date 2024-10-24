import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollTopButton from './Components/ScrollTopButton/ScrollTopButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScrollTopButton />
  </StrictMode>,
)