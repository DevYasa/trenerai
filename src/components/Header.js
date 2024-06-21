// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';
import trenerLogo from '../assets/images/trener-ai.png';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="title">
          <img src={trenerLogo} alt="TrenerAI Logo" className="logo" />
        </Typography>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#about">About Us</Link>
          <Link to="#contact">Contact Us</Link>
        </div>
        <Button variant="contained" className="signup-btn">Signup</Button>
        <Button variant="outlined" className="login-btn">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
