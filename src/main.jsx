import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

import App from './App'
import './index.css'
import ShopPage from './pages/shop/shop.component';

const router = createBrowserRouter([
  {
    exact: true,
    path:"/",
    element: <App/>,
  },
  {
    exact: true,
    path: "/shop",
    element: <ShopPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
