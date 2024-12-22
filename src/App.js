// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./components/CartContext";
// import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from "./components/About";
import Home from "./components/Home"
import Contact from "./components/ContactUs";
import Shop from "./components/Shop";
import CartItems from "./components/CartItems"

function App() {
  console.log("hello world")
  return (
      <div className="App">

        <Navbar></Navbar>
        <h1>welcome home</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cartItems" element={<CartItems />} />
        </Routes>
      </div>
  );
}

export default App;
