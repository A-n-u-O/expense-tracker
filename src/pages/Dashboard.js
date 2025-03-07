import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      alert("User logged out successfully!");
      navigate("/"); //navigate to home page
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert("Error logging out:", error.message);
    }
  };
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" component={"h1"} gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your Expense Tracker Dashboard
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button component={Link} to="/add-expense" variant="contained">
          View Expenses
        </Button>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};
export default Dashboard;
