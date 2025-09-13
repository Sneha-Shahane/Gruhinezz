import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

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
    <div className="container">
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
          required
        />
        <button type="submit">Login</button>

        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
