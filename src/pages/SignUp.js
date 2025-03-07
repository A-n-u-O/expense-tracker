import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const handleSignup = async ({ email, password }) => {
    try {
      //create new user with firebase
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!");
      alert("User signed up successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };
  return (
    <Box>
      <AuthForm formTitle={"Sign Up"} onSubmit={handleSignup} isSignup={true} />
      <Typography align="center" sx={{ mt: 2 }}>
        Already have an account? <Link to={"/login"}>Sign Up</Link>
      </Typography>
    </Box>
  );
};
export default SignUp;
