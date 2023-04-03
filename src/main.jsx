import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { store, persistor } from './redux/store'

import './index.css'
import Loader from './pages/loader/loader.component'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<Loader/>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
