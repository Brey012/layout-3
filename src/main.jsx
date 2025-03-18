import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Maquetacion from './Maquetacion.jsx'
import Slider from './components/Slider.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maquetacion />
  </StrictMode>,
)
