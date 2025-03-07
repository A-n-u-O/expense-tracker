import { Box, Typography } from "@mui/material";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async ({ email, password }) => {
    try {
      //sign in user with firebase
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully!");
      alert("user logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("error logging in:", error.message);
      alert(error.message);
    }
  };
  return (
    <Box>
      <AuthForm formTitle={"Login"} onSubmit={handleLogin} isSignup={false} />
      <Typography align="center" sx={{ mt: 2 }}>
        Don't have an account? <Link to={"/signup"}>Sign Up</Link>
      </Typography>
    </Box>
  );
};
export default Login;
