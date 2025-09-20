import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import googleLogo from "./icons/google.png";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="lcontainer">
      {/* Logo Text */}
      <div className="logo-text">gruhinezz</div>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          id="entpss"
          required
        />
        <p id="notremember">
          <Link to="" id="notremember2">Forgot Password</Link>
        </p>
        <button type="submit" id="login">Login</button>
        <button type="button" id="loginwG">
          <p>Login With Google</p>
          <img
            src={googleLogo}
            alt="Google logo"
            width="28"
            height="28"
            style={{ marginLeft: "5px" }}
          />
        </button>
        <button type="submit" id="loginwP"><p>Login With Phone</p></button>

        <p id="to-signup">
          <Link to="/register" id="to-signup">New here? Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
