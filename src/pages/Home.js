import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Expense Tracker
        </Typography>
        <Button component={Link} to="/login" variant="contained" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          sx={{ mr: 2 }}>
          Sign Up
        </Button>
        <Outlet /> {/* to render child routes */}
      </Box>
    </Container>
  );
};
export default Home;
