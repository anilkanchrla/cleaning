import React from "react";
import Navbar from "./components/navabar";
import Home from "./components/hom/home";
import About from "./components/about/about";
import Products from "./components/products/products";
import Serve from "./components/serve/serve"
import WhatsAppFloat from "./components/floatingwhatts/whatss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/serve" element={<Serve/>}/>
      </Routes>

<WhatsAppFloat />
    </div>
  )
}
export default App;