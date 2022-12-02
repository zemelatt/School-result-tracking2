import React from "react";
import "./AdminControl.css";
import { NavLink } from "react-router-dom";
const AboutStudents = () => {
  return (
    <>
      <div className="admin-control">
        <NavLink to="register-new-student" className="admin-btn">
          Register
        </NavLink>
        <NavLink to="/students" className="admin-btn">
          Students
        </NavLink>
        <NavLink to="" className="admin-btn">
          Profile
        </NavLink>
        <NavLink to="" className="admin-btn">
          Update
        </NavLink>
      </div>
    </>
  );
};

export default AboutStudents;
