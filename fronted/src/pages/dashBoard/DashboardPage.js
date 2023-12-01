import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  Grid,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./dashBoard.css";
import Contact from "../Contect";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setTableData(parsedData);
  }, []);

  const dummyData = [
    {
      key: 1001,
      ProductName: "Dummy Product 1",
      price: "$10",
      description: "This is a dummy product.",
      image: require("../../asset/img1.jpg"),
    },
    {
      key: 1002,
      ProductName: "Dummy Product 2",
      price: "$15",
      description: "Another dummy product description.",
      image: require("../../asset/img2.jpg"),
    },

    {
      key: 1002,
      ProductName: "Dummy Product 2",
      price: "$15",
      description: "Another dummy product description.",
      image: require("../../asset/img3.jpg"),
    },
  ];

  const combinedData = [...dummyData, ...tableData];

  const handleSearch = (query) => {
    const filteredData = combinedData.filter(
      (item) =>
        item.ProductName &&
        item.ProductName.toLowerCase().includes(query.toLowerCase())
    );
    setTableData(filteredData.length > 0 ? filteredData : dummyData);
  };
  

  return (
    <div className="main-container">
      <div className="image-animtion">
        <div className="overlay">
          <h1 className="animated-text">Explore Your Big House Dream</h1>
          <div className="search-container">
            <TextField
              type="text"
              label="Search Home here"
              variant="outlined"
              value={searchQuery}
               onChange={(e) => {
            const query = e.target.value;
            setSearchQuery(query);
            handleSearch(query);
          }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon onClick={() => handleSearch(searchQuery)} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
                "& .MuiInputBase-input": {
                  height: "15px",
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(14px, 15px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(14px, -6px) scale(0.75)",
                },
                width: "100%", // Adjusted width to take full width
              }}
            />
          </div>
        </div>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {combinedData.slice(0, 6).map((item) => (
          <Grid
            item
            xs={12}
            sm={12} // Full width on small screens
            md={4} // 3 cards in one line on larger screens
            lg={4} // 3 cards in one line on larger screens
            key={item.key}
            style={{ marginBottom: "20px", marginTop: "40px" }}
          >
            <Link
              to={`/product/${item.key}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="immersive-card"
                style={{
                  height: "100%",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.ProductName}
                  height="140"
                  image={item.image}
                  style={{
                    height: 180,
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <CardContent
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <Typography variant="h5" component="div">
                        {item.ProductName}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Price: {item.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Description: {item.description}
                      </Typography>
                    </div>
                    <FavoriteBorderIcon color="secondary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Contact />
    </div>
  );
};

export default DashboardPage;
