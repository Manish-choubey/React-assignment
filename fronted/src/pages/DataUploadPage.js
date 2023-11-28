import React, { useState } from "react";
import Input from "../componenet/Input.js";
import Button from "../componenet/Buttom.js";
import img3 from "../asset/data.jpg";
import "../pages/Login/login.css";

export default function DataUpload() {
  const [data, setData] = useState({
    ProductName: "",
    price: Number,
    description: "",
    image: null, // Add image property to state
  });

  const [dataArray, setDataArray] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setData((prevData) => ({
          ...prevData,
          image: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const existingData = JSON.parse(localStorage.getItem("dataArray")) || [];
  
    const entryKey = Date.now().toString();
  
    const newEntry = { key: entryKey, ...data };
    const updatedDataArray = [...existingData, newEntry];
    setDataArray(updatedDataArray);
    localStorage.setItem("dataArray", JSON.stringify(updatedDataArray));
  
    // Reset form data, excluding the image property
    setData({
      ProductName: "",
      price: Number,
      description: "",
      // image: null, // Remove this line if you want to keep the image
    });
  };
  
  return (
    <div className="main-login">
      <div className="image-contaner">
        <img src={img3} alt="" height={500} width={400} />
      </div>
      <div>
        <form>
          <div>
            <Input
              label="ProductName"
              type="text"
              id="ProductName"
              value={data.ProductName}
              onChange={handleInputChange}
            />
            <Input
              label="price"
              type="Number"
              id="price"
              value={data.price}
              onChange={handleInputChange}
            />
            <Input
              label="description"
              type="text"
              id="description"
              value={data.description}
              onChange={handleInputChange}
            />
            {/* Image upload input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <Button type="button" textOnly onClick={handleFormSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
