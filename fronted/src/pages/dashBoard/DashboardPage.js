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

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setTableData(parsedData);
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    const parsedData = storedData ? JSON.parse(storedData) : [];

    const filteredData = parsedData.filter(
      (item) =>
        item.ProductName &&
        item.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setTableData(filteredData);
  }, [searchQuery]);

  return (
    <div className="main-container">
      <div className="search-container">
        <TextField
          type="text"
          label="Search Product Name"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
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

      <Grid container spacing={3}>
        {tableData.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.key}
            style={{ marginBottom: "20px", marginTop: "50px" }}
          >
            <Link to={`/product/${item.key}`} style={{ textDecoration: "none" }}>
              <Card style={{ height: "100%", borderRadius: "20px", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  alt={item.ProductName}
                  height="140"
                  image={item.image}
                  style={{ height: 180, borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                />
                <CardContent style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
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
    </div>
  );
};

export default DashboardPage;
