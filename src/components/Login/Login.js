import React, { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    return (
        <div className={styles.wrapper}>
            <div className={styles['container-reg']}>
                <form onSubmit={(e) => {
                            e.preventDefault()
                            login({ email, password })
                    }} className={styles['login-form']}>
                    <h2>Login</h2>
                    <div className={styles['input-group']}>
                        <label>Username</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" required="" />
                    </div>
                    <div className={styles['input-group']}>
                        <label>Password</label>
                        <input value={email} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required="" />
                        <a href="#" className={styles['forgot-password']}>
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className={styles['login-button']}
                    >
                        Login
                    </button>
                    <div className="signup-text">
                        Don't have an account? <span className="signup-gap" />
                        <Link to="/register" className="signup-link" style={{ color: "#007BFF" }}>
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
