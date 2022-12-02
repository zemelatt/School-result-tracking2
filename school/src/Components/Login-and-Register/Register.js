import React, { useState } from "react";
import "./rigester.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
    password2: "",
  });

  const handeleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = (e) => {
    e.preventDefault();
    const { name, password, password2 } = user;
    if (name && password && password === password2) {
      Axios.post("http://localhost:2020/api/registration", user).then(
        (response) => {
          alert(response.data.msg);
          navigate("/login");
        }
      );
    } else {
      alert("invalid input");
    }
  };
  return (
    <>
      <div className="register-form">
        <h2 className="register">Register</h2>
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
          placeholder="password"
          onChange={handeleOnChange}
          required
        />
        <input
          type="password"
          name="password2"
          required
          placeholder="re-write password"
          onChange={handeleOnChange}
        />
        <button className="register-btn" onClick={register}>
          Register
        </button>
        <p className="to-register">
          if you are new, click on <a href="/login">Log in</a>
        </p>
      </div>
    </>
  );
};

export default Register;
