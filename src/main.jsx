import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './style.css'
import router from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(<div className='max-w-7xl mx-auto'><AuthProvider><RouterProvider router={router} /></AuthProvider></div>)