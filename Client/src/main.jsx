import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from './Store/AuthProvider.jsx'
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover
theme="colored"
/>
    </AuthProvider>
  </React.StrictMode>,
)
