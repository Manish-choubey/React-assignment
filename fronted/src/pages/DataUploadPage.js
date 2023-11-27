import Input from "../componenet/Input.js";
import Button from "../componenet/Buttom.js";
import { useState } from "react";
import img3 from "../asset/data.jpg";
import "../pages/Login/login.css"

export default function DataUpload() {
  const [data, setData] = useState({
    ProductName: "",
    price: Number,
    description: "",
  });
  const [dataArray, setDataArray] = useState([]);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("dataArray")) || [];

    const entryKey = Date.now().toString();

    const newEntry = { key: entryKey, ...data };
    const updatedDataArray = [...existingData, newEntry];
    setDataArray(updatedDataArray);
    localStorage.setItem("dataArray", JSON.stringify(updatedDataArray));

    setData({
      ProductName: "",
      price: Number,
      description: "",
    });
  };

  return (
    <div className="main-login">
      <div className="image-contaner">
        <img src={img3} alt=""  height={500} width={400}/>
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
