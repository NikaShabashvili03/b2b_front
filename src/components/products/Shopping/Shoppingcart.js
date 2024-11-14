import React, { useEffect, useState } from 'react';
import styles from './shoppingcart.module.css';
import IMG1 from "../../../assets/1707289109360.png";
import IMG2 from "../../../assets/1713416670393.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartProducts } from '../../../redux/slices/cartSlice';

const Shoppingcart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {/* {/* <h2 className={styles.title}>ჩემი კალათა</h2> */}
      {!cart?.data?.cartItems ? (
        <p>თქვენი კალათა ცარიელია</p>
      ) : (
        <div className={styles.cartList}>
          {cart?.data?.cartItems?.map((item) => (
            <div key={item._id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h3>{item.productName}</h3>
                <p>Price: {item.discountedTotal}ლ <sup><del>{item.productPrice}</del>ლ</sup></p>
                <p>Serial Number: {item.prod_id}</p> 
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                />
                <button className={styles.deleteButton}>წაშლა</button>
                </div>
            </div>
          ))}
          <div className={styles.total}>
            <h3>სულ: {cart?.data?.totalDiscountedAmount} ლარი <sup><del>{cart.data.totalAmount}</del> ლარი</sup></h3>
            <Link to={'/payment'} className={styles.checkoutButton}>გადახდა</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoppingcart;
