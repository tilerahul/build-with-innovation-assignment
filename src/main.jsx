import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./Reducers/Authentication/AuthContext.jsx";
import {CartProvider} from './Reducers/Cart/CartContext.jsx';
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <App />
      <Toaster />
    </CartProvider>
  </AuthProvider>
)
