import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div>
            <div className="container-reg">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" id="username" name="username" required="" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" id="password" name="password" required="" />
                        <a href="#" className="forgot-password">
                            Forgot Password?
                        </a>
                    </div>
                    <button onClick={() => localStorage.setItem("password", "1")} type="submit" className="login-button">
                        Login
                    </button>
                    <div className="signup-text">
                        Don't have an account? <span className="signup-gap" />
                        <a href="#" className="signup-link" style={{ color: "#007BFF" }}>
                            Sign up
                        </a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
