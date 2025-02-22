import React, { useEffect } from 'react';
import styles from './shoppingcart.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addOnCart, fetchCartProducts, removeFromCart } from '../../../redux/slices/cartSlice';

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

  
  const onHandleAddQuantity = (id, quantity) => {
    dispatch(addOnCart({
      productId: id,
      quantity: quantity,
    }))
  }
  

  const totalAmount = cart?.data?.reduce((acc, item) => acc + parseInt(item.product.originalPrice * item.quantity), 0);
  const totalDiscountedAmount = cart?.data?.reduce((acc, item) => acc + parseInt(item.totalPrice), 0);

  return (
    <div className={styles.container}>
      {!cart?.data ? (
        <p>თქვენი კალათა ცარიელია</p>
      ) : (
        <div className={styles.cartList}>
          {cart?.data?.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h3>{item.product.name}</h3>
                <p>Price: {parseInt(item.totalPrice)}ლ {item.product.originalPrice * item.quantity !== item.totalPrice && <sup><del>{item.product.originalPrice * item.quantity}</del>ლ</sup>}</p>
                <p>Serial Number: {item.product.prod_id}</p> 
                <div className={styles.quantityContainer}>
                  <button onClick={() => onHandleAddQuantity(item.product.id, -1)} className={styles.plusButton}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                  />
                  <button onClick={() => onHandleAddQuantity(item.product.id, 1)} className={styles.plusButton}>+</button>
                </div>
                  <button onClick={() => handleRemoveFromCart({ id: item.product.id })} className={styles.deleteButton}>წაშლა</button>
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
