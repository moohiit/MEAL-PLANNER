import React from 'react';
import { Button, Typography, Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://source.unsplash.com/featured/?food)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'cornflowerblue',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
}));

const Home = () => {
  return (
    <BackgroundBox>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to the Meal Planner and Recipe Manager
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Plan your meals, manage your recipes, and make cooking easier with our all-in-one solution!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              color="primary"
              size="large"
            >
              Create New Account
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="secondary"
              size="large"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  );
};

export default Home;
