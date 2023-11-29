import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeIcon from "@mui/icons-material/Home";

const ProductDetailPage = () => {
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
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Card style={{ borderRadius: "20px", width: "100%", marginTop:"50px" }}>
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
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Looking for the Best Rent?
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "10px" }}>
          Choose from over 1 million apartments, houses, condos, and townhomes
          for rent.
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          Common Amenities:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <IconButton>
              <div style={{ textAlign: "center" }}>
                <LocationOnIcon />
                <Typography variant="body2" style={{ marginTop: "5px" }}>
                  Location
                </Typography>
              </div>
            </IconButton>
          </Grid>
          <Grid item xs={6} sm={3}>
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
          </Grid>
          <Grid item xs={6} sm={3}>
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
          </Grid>
          <Grid item xs={6} sm={3}>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
