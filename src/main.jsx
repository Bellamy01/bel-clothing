import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

import App from './App'
import './index.css'

const Hats = () => {
  return (
    <div>
      Hats
    </div>
  )
}

const router = createBrowserRouter([
  {
    exact: true,
    path:"/",
    element: <App/>,
  },
  {
    exact: true,
    path: "/shop/hats",
    element: <Hats />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
