import React, { useState } from 'react';
import styles from './RegistrationForm.module.css'; // Import the CSS module
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const { register } = useAuth();
  
  const [data, setData] = useState({
    company: "",
    position: "", 
    identify: "", 
    name: "",
    lastname: "",
    phone: "", 
    email: "", 
    password: "",
    rePassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = () => {
    if (data.password !== data.rePassword) return alert("გაიმეორეთ პაროლი სწორად");
    register({
      company: data.company,
      position: data.position,
      identify: data.identify,
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });
  }

  return (
    <div className={styles.App}>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit()
        }} 
        className={styles.registrationform}
      >
        <h2>Sign Up</h2> {/* Title */}

        <div className={styles.formgroup}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className={styles.forminput}
            required
            value={data.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            name="identify"
            placeholder="Identification Number"
            className={styles.forminput}
            required
            value={data.identify}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.forminput}
            required
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className={styles.forminput}
            required
            value={data.lastname}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            name="position"
            placeholder="Position"
            className={styles.forminput}
            required
            value={data.position}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.forminput}
            required
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className={styles.forminput}
            required
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formgroup}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.forminput}
            required
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formgroup}>
          <input
            type="password"
            name="rePassword"
            placeholder="Confirm Password"
            className={styles.forminput}
            required
            value={data.rePassword}
            onChange={handleChange}
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
