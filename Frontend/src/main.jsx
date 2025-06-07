import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/userContext.jsx'
import CaptainContext from './context/CaptainContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <UserProvider>
      <CaptainContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserProvider>
  </React.StrictMode>
)
