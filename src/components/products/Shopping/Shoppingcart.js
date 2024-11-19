import React, { useEffect, useState } from 'react';
import styles from './shoppingcart.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartProducts, removeFromCart } from '../../../redux/slices/cartSlice';

const Shoppingcart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [dispatch])

  const handleRemoveFromCart = ({ id }) => {
    dispatch(removeFromCart({
      id: id
    }))
  }

  const totalAmount = cart?.data?.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalDiscountedAmount = cart?.data?.reduce((acc, item) => acc + item.discount, 0);

  return (
    <div className={styles.container}>
      {/* {/* <h2 className={styles.title}>ჩემი კალათა</h2> */}
      {!cart?.data ? (
        <p>თქვენი კალათა ცარიელია</p>
      ) : (
        <div className={styles.cartList}>
          {cart?.data?.map((item) => (
            <div key={item._id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h3>{item.productId.name}</h3>
                <p>Price: {item.discount}ლ <sup><del>{item.totalPrice}</del>ლ</sup></p>
                <p>Serial Number: {item.productId.prod_id}</p> 
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                />
                <button onClick={() => handleRemoveFromCart({ id: item.productId._id })} className={styles.deleteButton}>წაშლა</button>
                </div>
            </div>
          ))}
          <div className={styles.total}>
            <h3>სულ: {totalDiscountedAmount} ლარი <sup><del>{totalAmount}</del> ლარი</sup></h3>
            <Link to={'/payment'} className={styles.checkoutButton}>გადახდა</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoppingcart;
