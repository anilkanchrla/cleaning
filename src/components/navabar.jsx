// import React from "react";
// import {Link, useNavigate} from "react-router-dom"
// import Yuzen from "../imgs/Yuz.jpg"
// import Home from "./hom/home";
// import './navbar.css';
// import React, { useState } from "react";


// const Navbar=()=>{
//    const [menuOpen, setMenuOpen] = useState(false);
//  return (
//     <nav className="navbar">
//       <div className="nav-logo">
//         <img src={Yuzen} alt="logo" />
//         <span>Yuzen Services</span>
//       </div>

//       <ul className="nav-links">
//         <li><Link to="">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li><Link to="/who we serve">We You Serve</Link></li>
//       </ul>

//          {/* 3-Dots Menu button for mobile */}
//       <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//         ⋮
//       </button>

//         {/* Mobile Dropdown */}
//       {menuOpen && (
//         <ul className="mobile-menu">
//           <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
//           <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
//           <li><Link to="/who-we-serve" onClick={() => setMenuOpen(false)}>Who We Serve</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }      
// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Yuzen from "../imgs/Yuz.jpg";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Yuzen} alt="logo" />
        <span>Yuzen Services</span>
      </div>

      <ul className="nav-links desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/serve">Who We Serve</Link></li>
      </ul>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ⋮
      </button>

      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/serve" onClick={() => setMenuOpen(false)}>Who We Serve</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
