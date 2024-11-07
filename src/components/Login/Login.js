import React from 'react';
import styles from './login.module.css';

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['container-reg']}>
                <form className={styles['login-form']}>
                    <h2>Login</h2>
                    <div className={styles['input-group']}>
                        <label>Username</label>
                        <input type="text" id="username" name="username" required="" />
                    </div>
                    <div className={styles['input-group']}>
                        <label>Password</label>
                        <input type="password" id="password" name="password" required="" />
                        <a href="#" className={styles['forgot-password']}>
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        onClick={() => localStorage.setItem("password", "1")}
                        type="submit"
                        className={styles['login-button']}
                    >
                        Login
                    </button>
                    <div className={styles['signup-text']}>
                        Don't have an account? <span className={styles['signup-gap']} />
                        <a href="#" className={styles['signup-link']} style={{ color: "#007BFF" }}>
                            Sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
