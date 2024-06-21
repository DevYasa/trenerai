// src/components/HomePage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './HomePage.css';
import trainerImage from '../assets/images/trainer-img.png'; // Ensure you have this image

const HomePage = () => {
  return (
    <div className="homepage">
      <Container className="content" maxWidth="md">
        <Typography variant="h2" className="title">
          WELCOME TO<br></br>TRENER AI
        </Typography>
        <Typography variant="h5" className="description">
          TrenerAI is your AI-powered fitness coach,offering
          personalized workout plans and nutrition advice
          tailored to your goals. Achieve optimal results
          with smart, adaptive guidance every step of the way.
        </Typography>
        <Button variant="contained" className="join-now-btn">Join Now</Button>
      </Container>
      <img src={trainerImage} alt="Trainer" className="trainer-image" />
    </div>
  );
};

export default HomePage;
