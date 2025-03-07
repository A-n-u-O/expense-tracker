import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const AuthForm = ({ formTitle, onSubmit, isSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match");
    }
    onSubmit({ email, password });
  };
  return (
    <Box>
      <Typography>{formTitle}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
      </form>
      {isSignup && (
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          required
        />
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}>
        {formTitle}
      </Button>
    </Box>
  );
};
export default AuthForm;
