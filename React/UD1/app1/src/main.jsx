import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import Pruebas from './pages/Pruebas.jsx'

createRoot(document.getElementById('root')).render(
    <MyApp />
)
