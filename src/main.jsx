import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App'
import Admin from './Admin'
import Login from './Login'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route

          path="/admin"

          element={
            localStorage.getItem('admin') === 'true'
              ? <Admin />
              : <Login />
          }

        />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>

)
