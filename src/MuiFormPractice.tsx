
import { useState, type FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function MuiFormPractice() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Clear previous messages
    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");

    let isValid = true;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailPattern.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      if (password.length < 8) {
        setPasswordError("Password must contain at least 8 characters");
        isValid = false;
      } else if (!/[A-Z]/.test(password)) {
        setPasswordError("Password must contain at least one capital letter");
        isValid = false;
      } else if (!/[0-9]/.test(password)) {
        setPasswordError("Password must contain at least one number");
        isValid = false;
      }
    }

    // Show success only when validation passes
    if (isValid) {
      setSuccessMessage("Form validation successful!");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 4, borderRadius: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your details to continue.
        </Typography>

        <Stack
          component="form"
          spacing={2}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailError("");
              setSuccessMessage("");
            }}
            error={Boolean(emailError)}
            helperText={emailError}
            fullWidth
          />

          <TextField
  label="Password"
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(event) => {
    setPassword(event.target.value);
    setPasswordError("");
    setSuccessMessage("");
  }}
  error={Boolean(passwordError)}
  helperText={passwordError}
  fullWidth
  slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((previous) => !previous)}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    },
  }}
/>

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>

          {successMessage && (
            <Alert severity="success">
              {successMessage}
            </Alert>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MuiFormPractice;
