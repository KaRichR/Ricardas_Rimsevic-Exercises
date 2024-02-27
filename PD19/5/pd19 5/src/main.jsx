import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Button from './Button.jsx'
import Header from './Header.jsx'
import Straipsnins from './Straipsnins.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Straipsnins/>
    <Button/>
  </React.StrictMode>
)
