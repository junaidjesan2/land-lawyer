import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PageRouter } from './routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={PageRouter}>

    </RouterProvider>
  </React.StrictMode>,
)
