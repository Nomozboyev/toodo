import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CRUDProvider } from './hooks/crud/CRUDhooks.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <CRUDProvider><App/></CRUDProvider>
  </React.StrictMode>,
)
