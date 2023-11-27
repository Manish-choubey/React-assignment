import React, { useState, useEffect } from "react";
import Input from "../../componenet/Input.js";
import Button from "../../componenet/Buttom.js";
import { useNavigate, Link } from "react-router-dom";
import img2 from "../../asset/mobile.png";
import "./login.css";

export default function Login() {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName" && !/^[a-zA-Z\s]+$/.test(value)) {
      setErrorMessage("Please enter only text for UserName");
    } else {
      setErrorMessage("");
    }
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = () => {
    if (userData.userName.trim() === "" || userData.password.trim() === "") {
      setErrorMessage("Please fill in all fields");
      setSuccessMessage("");
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData({
        userName: "",
        password: "",
      });
      setErrorMessage("");
      setSuccessMessage("Signup successful!");
      navigate("/dashboard"); // Redirect to login page
    }
  };

  return (
    <div className="main-login">
      <div className="image-contaner">
        <img
          src={img2}
          alt="image"
          height={600}
          width={500}
          className="desktop-view"
        />
      </div>
      <div>
        <form>
          <div>
            <Input
              label="UserName"
              type="text"
              id="userName"
              value={userData.userName}
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              type="password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button type="button" textOnly onClick={handleFormSubmit}>
              Submit
            </Button>
            {errorMessage && <p className="error-msg">{errorMessage}</p>}
            {successMessage && <p className="success-msg">{successMessage}</p>}
            <p>
              Dont Have account ?<Link to="/">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
