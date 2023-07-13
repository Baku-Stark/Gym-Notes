import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import React from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'

// CSS PRINCIPAL
import './assets/css/output.module.css'
// import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
