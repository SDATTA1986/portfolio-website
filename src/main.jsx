import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import BackgroundParticles from './Home/BackgroundParticles/BackgroundParticles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto text-white'>
    
          <RouterProvider router={router} />
          
        </div>
  </React.StrictMode>,
)




