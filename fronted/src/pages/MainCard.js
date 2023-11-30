import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeIcon from "@mui/icons-material/Home";

const MainCard = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("dataArray");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const selectedProduct = parsedData.find((item) => item.key === productId);
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div>
        <Card style={{ marginRight: "20px", borderRadius: "20px" }}>
          <CardMedia
            component="img"
            alt={product.ProductName}
            height="200"
            image={product.image}
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
          <CardContent>
            <Typography variant="h5">{product.ProductName}</Typography>
            <Typography variant="body1">Price: {product.price}</Typography>
            <Typography variant="body1">
              Description: {product.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginLeft: "10px",
        }}
      >
        <div>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Looking for the Best Rent?
          </Typography>
        </div>
        <div>
          <Typography variant="body1" style={{ marginBottom: "10px" }}>
            Choose from over 1 million apartments, houses, condos,
            <br />
            and townhomes for rent.
          </Typography>
        </div>
        <div>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Common Amenities:
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <IconButton>
              <div style={{ textAlign: "center" }}>
                <LocationOnIcon />
                <Typography variant="body2" style={{ marginTop: "5px" }}>
                  Location
                </Typography>
              </div>
            </IconButton>
          </div>
          <div style={{ marginRight: "10px" }}>
            <IconButton>
              <div style={{ textAlign: "center" }}>
                <AttachMoneyIcon />
                <Typography
                  variant="body2"
                  style={{ marginTop: "5px", whiteSpace: "nowrap" }}
                >
                  Affordable
                </Typography>
              </div>
            </IconButton>
          </div>
          <div style={{ marginRight: "10px" }}>
            <IconButton>
              <div style={{ textAlign: "center" }}>
                <CheckCircleIcon />
                <Typography
                  variant="body2"
                  style={{ marginTop: "5px", whiteSpace: "nowrap" }}
                >
                  Verified
                </Typography>
              </div>
            </IconButton>
          </div>
          <div>
            <IconButton>
              <div style={{ textAlign: "center" }}>
                <HomeIcon />
                <Typography
                  variant="body2"
                  style={{ marginTop: "5px", whiteSpace: "nowrap" }}
                >
                  Home
                </Typography>
              </div>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
