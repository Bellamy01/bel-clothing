import React from 'react';
import {
  createBrowserRouter, Route, RouterProvider
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';



function App() {
  return (
    <div>  
      <HomePage/>
    </div>
  )
}

export default App;