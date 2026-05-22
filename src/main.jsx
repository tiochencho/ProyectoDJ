import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App'
import Admin from './Admin'
import Login from './Login'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <HashRouter>

      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </HashRouter>

  </React.StrictMode>

)