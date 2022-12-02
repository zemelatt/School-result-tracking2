import React, { useState, useEffect } from "react";
import "./login.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handeleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const lOGIN = (e) => {
    e.preventDefault();
    const { name, password } = user;
    if (name && password) {
      Axios.post("http://localhost:2020/api/login", user).then((response) => {
        if (response.data.msg === "logged in successfully") {
          localStorage.setItem("info", response.data.result[0].role);
          navigate("/home");
        }
        alert(response.data.msg);
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <>
      <div className="login-form">
        <h2 className="login">Log In</h2>
        <div>
          <label>Name:</label>
        </div>
        <input
          type="text"
          name="name"
          placeholder="john doe"
          autoComplete="off"
          onChange={handeleOnChange}
          required
        />
        <div>
          <label>Password</label>
        </div>
        <input
          type="password"
          name="password"
          onChange={handeleOnChange}
          required
        />
        <button className="login-btn" onClick={lOGIN}>
          Log in
        </button>
        <p className="to-register">
          if you are new, click on <a href="/register">Register</a>
        </p>
      </div>
    </>
  );
};

export default Login;
