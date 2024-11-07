import React, { useState } from 'react';
import styles from './main.module.css';
import { Link, Outlet } from 'react-router-dom';
import GME from '../../assets/GM-logo.png';

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuth = localStorage.getItem("password") === "1";
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <title>Navbar Example</title>
      </head>

      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles['nav-links']}>
            <div className={styles.logo}>
              <a href="#"><img src={GME} width="65px" height="65px" alt="Logo" /></a>
            </div>
            <ul className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
              <li><a href="/Products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>

            <div className={styles['b-container']}>
              <div className={styles['c-container']}>
                <select id="language-select" className={styles['language-select']}>
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                  <option value="ka">Georgian</option>
                </select>
                <Link to="#" className={styles.favorite}><i className="fa-solid fa-cart-shopping"></i></Link>
                <Link to="/profile" className={styles.profileIcon}><i className="fa-regular fa-user"></i></Link>
              </div>
              {isAuth && (
                <button onClick={() => localStorage.setItem("password", "0")}>
                  Logout
                </button>
              )}
            </div>

            <div className={styles['burger-menu']} onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.cartwrapper}>
        <div className={styles.cartShown}></div>
      </div>

      <Outlet />
    </div>
  );
};

export default Main;
