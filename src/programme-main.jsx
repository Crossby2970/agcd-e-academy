import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProgrammePage from './pages/ProgrammePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgrammePage />
  </StrictMode>,
)
