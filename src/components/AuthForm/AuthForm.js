import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function AuthForm({ formTitle, onSubmit, isSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password }); // Debugging
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSubmit({ email, password }); // Pass email and password to the parent component
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", my: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {formTitle}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
          autoComplete="off" // Disable autofill
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
          autoComplete="off" // Disable autofill
        />
        {isSignUp && (
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            autoComplete="off" // Disable autofill
          />
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          {formTitle}
        </Button>
      </form>
    </Box>
  );
}

export default AuthForm;