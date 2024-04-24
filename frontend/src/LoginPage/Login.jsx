import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Login.css";
import logo from "./../assets/logo.png";

const Login = () => {
    const googleAuth = () => {
        window.open(
            `http://localhost:8080/auth/google/callback`, "_self"
        )
    }
    
  const [showPassword, setShowPassword] = useState(false);

  const [action, setAction] = useState("student");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login_page">
      <div
        className="login_container"
        style={{ height: action === "admin" ? "480px" : "570px" }}
      >
        <div className="login_header">
          <div className="signup_logo">
            <img src={logo} alt="" className="login_logo" />
          </div>
          <div className="text">Philippine Christian University</div>
        </div>
        <div className="inputs">
          <div className="input">
            <p>{action === "student" ? "Email" : "User ID"}</p>
            <input type={action === "admin" ? "text" : "email"} />
          </div>
          <div className="input">
            <p>Password</p>
            <input type={showPassword ? "text" : "password"} />
            <div className="eye" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-eye"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#8A8A8A"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-eye-closed"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#8A8A8A"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                  <path d="M3 15l2.5 -3.8" />
                  <path d="M21 14.976l-2.492 -3.776" />
                  <path d="M9 17l.5 -4" />
                  <path d="M15 17l-.5 -4" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="rememberMe">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <div className="button-container">
          <div className="login">Log in</div>
          {action !== "admin" && (
            <div className="loginG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#7bc62d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <button onClick={googleAuth}>
                <span>Sign in with Google</span>
               </button>
            </div>
          )}
        </div>
      </div>
      <div className="adminLogin">
        <div
          className="admin-button"
          onClick={() => {
            setAction(action === "student" ? "admin" : "student");
          }}
        >
          {action === "student" ? "Log in as Admin" : "Log in as Student"}
        </div>
      </div>
    </div>
  );
};

export default Login;
