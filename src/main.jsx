import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider, Route, createRoutesFromElements
} from 'react-router-dom';

import App from './App'
import Header from './components/header/header.component';
import './index.css'
import ShopPage from './pages/shop/shop.component';

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route path='' element={<App/>} />
      <Route path="shop" element={<ShopPage />} />
    </Route>
  )
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
