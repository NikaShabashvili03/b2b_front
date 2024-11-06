import React, { useState } from 'react';
import "./main.css";
import { Link, Outlet } from 'react-router-dom';
import GME from '../../assets/GM-logo.png'

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu state on click
  };

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <title>Navbar Example</title>
      </head>
      
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <div className="logo">
              <a href="#"><img src={GME} width="65px" height="65px" alt="Logo" /></a>
            </div>
            {/* Conditionally add 'show' class to show menu on click */}
            <ul className={`links ${isMenuOpen ? 'show' : ''}`}>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>

            <div className="b-container">
              <div className="c-container">
                <select id="language-select">
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                  <option value="ka">Georgian</option>
                </select>
                <Link href="#" className="favorite"><i className="fa-regular fa-heart"></i></Link>
                <Link href="#" className="favorite"><i className="fa-solid fa-cart-shopping"></i></Link>
              </div>
              <button className="button signup">Sign Up</button>
              <div className="line"></div>
              <button className="button login">Log In</button>
            </div>

            {/* Burger menu button */}
            <div className="burger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
      <script src="scripts.js"></script>
    </div>
  );
}

export default Main;
