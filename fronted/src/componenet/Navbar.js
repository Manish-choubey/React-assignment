import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./navbar.css";

export const isAuthenticated = () => {
  const storedUserData = localStorage.getItem("userData");
  return storedUserData && JSON.parse(storedUserData).userName !== "";
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div className="container">
      <nav className="first-nav">
        <ul className="first-nav-list">
          <li className="first-nav-item">
            {isAuthenticated() ? (
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <NavLink to="/" end>
                Sign Up / Log In
              </NavLink>
            )}
          </li>
          <li className="first-nav-item">
            <NavLink to="/upload" end>
              Upload Data
            </NavLink>
          </li>
          {isAuthenticated() && (
            <li className="first-nav-item">
              <NavLink to="/dashboard" end>
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
