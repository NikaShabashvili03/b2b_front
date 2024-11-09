import React, { useState } from 'react';
import styles from './RegistrationForm.module.css'; // Import the CSS module
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const { register } = useAuth();
  
  const [data, setData] = useState({
    company: "",
    position: "", 
    indentify: "", 
    name: "",
    lastname: "",
    phone: "", 
    email: "", 
    password: "",
    rePassowrd: ""
  })
  return (
    <div className={styles.App}> {/* Applying App class from the CSS module */}
      <form onSubmit={() => {
        if(data.password !== data.rePassword) return;
            register({
              
            })
        }} 
      className={styles.registrationform}>
        <h2>Sign Up</h2> {/* Title */}
        
        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Company Name"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Identification Number"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Name"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Last Name"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Position"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="email"
            placeholder="Email"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.forminput}
            required
          />
        </div>
        
        <div className={styles.formgroup}>
          <input
            type="password"
            placeholder="Password"
            className={styles.forminput}
            required
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.forminput}
            required
          />
        </div>

        <button type="submit" className={styles.formbutton}>
          Sign Up
        </button>

        <p className={styles.logintext}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
