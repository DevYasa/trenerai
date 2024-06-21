// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; 2024 TrenerAI. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
