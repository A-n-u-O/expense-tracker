import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    console.log("Attempting to log in with:", email, password); // Debugging
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  return (
    <Box>
      <AuthForm formTitle="Login" onSubmit={handleLogin} isSignUp={false} />
      <Typography align="center" sx={{ mt: 2 }}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </Box>
  );
}

export default Login;