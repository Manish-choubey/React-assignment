import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const MainContainer = styled(Grid)`
  height: 100vh;
`;

const StyledCard = styled(Card)`
  max-width: 400px;
  margin: 0 auto;
`;

const FormContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export default function DataUpload() {
  const [data, setData] = useState({
    ProductName: "",
    price: "",
    description: "",
    image: null,
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
    <MainContainer container>
      <FormContainer item xs={12}>
        <StyledCard>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Data Upload
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Product Name"
                    id="ProductName"
                    value={data.ProductName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Price"
                    type="number"
                    id="price"
                    value={data.price}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    id="description"
                    value={data.description}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* Wrap the file input and button in a label */}
                  <label htmlFor="image" style={{ display: "block" }}>
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    
                    
                  >
                    Upload
                  </Button>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </label>
                 
                  {data.image && (
                    <img
                      src={data.image}
                      alt="Preview"
                      style={{ width: "100%", marginTop: 10, borderRadius: 8 }}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </StyledCard>
      </FormContainer>
    </MainContainer>
  );
}
