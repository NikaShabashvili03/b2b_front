import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import { Link, Outlet } from 'react-router-dom';
import GME from '../../assets/GM-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartProducts } from '../../redux/slices/cartSlice';

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuth = localStorage.getItem("password") === "1";
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [dispatch])

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
              <Link to="/"><img src={GME} width="65px" height="65px" alt="Logo" /></Link>
            </div>
            <ul className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>

            <div className={styles['b-container']}>
              <div className={styles['c-container']}>
                <select id="language-select" className={styles['language-select']}>
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                  <option value="ka">Georgian</option>
                </select>
                <Link to="/cart" className={styles.favorite}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p className={styles.cartLength}>{data.length}</p>
                </Link>
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

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
