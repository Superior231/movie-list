import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../src/assets/css/input.css'
import '../src/assets/css/output.css';
import "../src/assets/css/style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
