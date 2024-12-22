import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./components/CartContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CartProvider>
      <Router future={{ v7_relativeSplatPath: true }}>
        <App />
      </Router>
  </CartProvider>


);

// Measure performance
reportWebVitals();
