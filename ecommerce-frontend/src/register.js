import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import googleLogo from "./icons/google.png";

function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", formData);
      alert(res.data.message);
      navigate("/login"); // redirect to login after successful registration
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="rcontainer">
      <div className="logo-text">gruhinezz</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
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
        /><button type="submit" id="login"><p>Register</p></button>
        <button type="button" id="loginwG">
                  <p>Sing-Up With Google</p>
                  <img
                    src={googleLogo}
                    alt="Google logo"
                    width="28"
                    height="28"
                    style={{ marginLeft: "5px" }}
                  />
                </button><button type="submit" id="loginwP"><p>Sing-Up With Phone</p></button>

        <p id="to-signup">
          <Link to="/login" id="to-login">Already have an account</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;
