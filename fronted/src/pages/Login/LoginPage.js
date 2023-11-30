import React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Input from '../../componenet/Input';
import Button from '../../componenet/Buttom'; 
import img2 from '../../asset/mobile.png';
import './login.css';

const defaultTheme = createTheme();

export default function Login() {
  const [userData, setUserData] = React.useState({
    userName: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'userName' && !/^[a-zA-Z\s]+$/.test(value)) {
      setErrorMessage('Please enter only text for UserName');
    } else {
      setErrorMessage('');
    }
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = () => {
    if (userData.userName.trim() === '' || userData.password.trim() === '') {
      setErrorMessage('Please fill in all fields');
      setSuccessMessage('');
    } else {
      localStorage.setItem('userData', JSON.stringify(userData));
      setUserData({
        userName: '',
        password: '',
      });
      setErrorMessage('');
      setSuccessMessage('Signup successful!');
      navigate('/dashboard'); // Redirect to login page
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box component="div" className="main-login" sx={{ borderRadius: "20px" }}>
        <Box component="div" className="image-container" sx={{ borderRadius: '30px' }}>
          <img
            src={img2}
            alt="image"
            height={570}
            width={500}
            className="desktop-view"
          />
        </Box>
        <Paper component="div" elevation={6} square sx={{ borderRadius: '16px' }}>
          <CssBaseline />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
            <Typography component="h1" variant="h5">
              Welcome
            </Typography>
            <Box component="form">
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
              <Button type="button" onClick={handleFormSubmit}>
                Login
              </Button>
              {errorMessage && <p className="error-msg">{errorMessage}</p>}
              {successMessage && <p className="success-msg">{successMessage}</p>}
              <Typography>
                Don't have an account? <Link component={RouterLink} to="/">Signup</Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
