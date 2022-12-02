import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FaSchool } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [adminLog, setAdmin] = useState("");
  const Navigate = useNavigate();
  const login = localStorage.getItem("info");
  useEffect(() => {
    if (login === "admin") {
      setAdmin(login);
    }
  }, [login]);

  const logout = () => {
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <div className="logo-img">
            <a href="/">
              <FaSchool style={{ color: "white" }} />
            </a>
          </div>
        </div>
        <div className="main-options">
          {adminLog ? (
            <div>
              <NavLink to="/" className="op ">
                Home
              </NavLink>
              <NavLink to="register-new-student" className="op">
                Register
              </NavLink>
              <NavLink to="/get-all-student" className="op">
                Students
              </NavLink>
              <NavLink to="/edit-score" className="op">
                Score
              </NavLink>
              <NavLink to="/update-score" className="op">
                Update
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/home" className="op ">
                Home
              </NavLink>
              <NavLink to="/user-check-score" className="op">
                Students
              </NavLink>
              <NavLink to="/about" className="op">
                About
              </NavLink>
            </div>
          )}
        </div>
        {login ? (
          <div className="logOUT">
            <a href="/login">
              <div className="logout-btn" onClick={logout}>
                Log out
              </div>
            </a>
          </div>
        ) : (
          <div className="logOUT">
            <a href="/login">
              <div className="logout-btn">Log In</div>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
