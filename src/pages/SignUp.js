import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async ({ email, password }) => {
    console.log("Attempting to sign up with:", email, password); // Debugging
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  return (
    <Box>
      <AuthForm formTitle="Sign Up" onSubmit={handleSignUp} isSignUp={true} />
      <Typography align="center" sx={{ mt: 2 }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Box>
  );
}

export default SignUp;