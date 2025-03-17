import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorScanner from './color-scanner.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    < ColorScanner/>
  </StrictMode>,
)
