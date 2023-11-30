import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const isAuthenticated = () => {
  const storedUserData = localStorage.getItem("userData");
  return storedUserData && JSON.parse(storedUserData).userName !== "";
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="logo">Logo</div>
      <div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <nav className={`first-nav ${isMenuOpen ? "open" : ""}`}>
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
    </div>
  );
};

export default Navbar;
