import React, { useState } from 'react';
import styles from './payment.module.css';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [formError, setFormError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCardNumberChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, '').slice(0, 16);
    if (inputValue.length <= 4) {
      setCardNumber(inputValue);
    } else {
      inputValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
      setCardNumber(inputValue);
    }
  };

  const handleExpiryDateChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (inputValue.length <= 2) {
      setExpiryDate(inputValue);
    } else {
      setExpiryDate(`${inputValue.slice(0, 2)}/${inputValue.slice(2)}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      setFormError('გთხოვთ შეავსოთ ყველა ველი.');
      return;
    }

    setFormError('');
    setPaymentSuccess(true);

    setTimeout(() => {
      setPaymentSuccess(false);
    }, 3000);

    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setCardholderName('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>აირჩიეთ გადახდის მეთოდი</h2>

      <div className={styles.paymentOptions}>
        <div
          className={`${styles.paymentCard} ${paymentMethod === 'creditCard' ? styles.active : ''}`}
          onClick={() => setPaymentMethod('creditCard')}
        >
          <div className={styles.cardIcon}>💳</div>
          <h3 className={styles.paymentCardTitle}>საკრედიტო ბარათი</h3>
        </div>

        <div
          className={`${styles.paymentCard} ${paymentMethod === 'paypal' ? styles.active : ''}`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <div className={styles.cardIcon}>💰</div>
          <h3 className={styles.paymentCardTitle}>PayPal</h3>
        </div>
      </div>

      {paymentMethod === 'creditCard' && (
        <form onSubmit={handleSubmit} className={styles.form}>
          {formError && <div className={styles.errorMessage}>{formError}</div>}

          <div className={styles.formGroup}>
  <label htmlFor="cardNumber" className={styles.label}>ბარათის ნომერი</label>
  <div className={styles.inputWithIcon}>
  <FaCcVisa className={styles.cardIconInsideInput1} />
  <FaCcMastercard className={styles.cardIconInsideInput} />
  <input
    type="text"
    id="cardNumber"
    className={styles.inputWithIconField}
    value={cardNumber}
    onChange={handleCardNumberChange}
    maxLength="19"
    placeholder="1234 5678 9876 5432"
    required
    aria-describedby="cardNumberHelp"
  />
</div>

  <small id="cardNumberHelp" className={styles.inputHelp}>ბარათის ნომერი (16 ციფრი).</small>
</div>

          <div className={styles.formGroup}>
            <label htmlFor="cardholderName" className={styles.label}>მფლობელის სახელი</label>

            <input
              type="text"
              id="cardholderName"
              className={styles.input}
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="John Doe" 
              required
              aria-describedby="cardholderNameHelp"
              
            />

            <small id="cardholderNameHelp" className={styles.inputHelp}>სახელი თქვენს ბარათზე.</small>
          </div>

          <div className={`${styles.formGroup} ${styles.flexRow}`}>
            <div className={styles.flexItem}>
              <label htmlFor="expiryDate" className={styles.label}>მოქმედების ვადა (MM/YY)</label>
              <input
                type="text"
                id="expiryDate"
                className={styles.input}
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength="5"
                placeholder="MM/YY"
                required
                aria-describedby="expiryDateHelp"
              />
              <small id="expiryDateHelp" className={styles.inputHelp}>მიუთითეთ მოქმედების ვადა.</small>
            </div>

            <div className={styles.flexItem}>
              <label htmlFor="cvv" className={styles.label}>CVV</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="text"
                  id="cvv"
                  className={styles.input}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength="3"
                  required
                  aria-describedby="cvvHelp"
                />
                <span className={styles.cvcIcon}>🔒</span>
              </div>
              <small id="cvvHelp" className={styles.inputHelp}>3 ციფრიანი კოდი თქვენი ბარათის უკანა მხარეს</small>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>გადახდა</button>
        </form>
      )}

      {paymentMethod === 'paypal' && (
        <div className={styles.paypalForm}>
          <p className={styles.paypalInfo}>თქვენ გადამისამართდები PAYPAL თან რათა შეასრულოთ გადახდა.</p>
          <button className={styles.submitButton} onClick={() => console.log('Redirect to PayPal')}>
            PayPal ით გადახდა
          </button>
        </div>
      )}

      {paymentSuccess && (
        <div className={`${styles.successMessage} ${styles.slideIn}`}>
          <div className={styles.successContent}>
            <span className={styles.successIcon}>✔️</span>
            <div className={styles.successText}>
              <h3>გადახდა წარმატებით შესრულდა!</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
