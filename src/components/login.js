import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import logo from "../assets/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = auth.login(username, password);
    if (!success) {
      setError("Nombre de usuario o contraseña incorrecta.");
    } else {
      navigate("/dashboard");
    }
  };

  const handleShowPasswordChange = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <img
        src={logo}
        alt="Tuplazaoposiciones"
        style={{ width: "100%", maxWidth: "200px", marginBottom: "16px" }}
      />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", mt: 1 }}
      >
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showPassword}
              onChange={handleShowPasswordChange}
              color="primary"
              sx={{ transform: "scale(0.8)" }}
            />
          }
          label={
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              Mostrar contraseña
            </Typography>
          }
          sx={{ mt: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "ochre.light",
            color: "text.primary",
            "&:hover": {
              bgcolor: "ochre.dark",
            },
          }}
        >
          Entrar
        </Button>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Typography
          component={Link}
          to="/forgot-password"
          variant="body2"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            textDecoration: "none",
            color: "primary.main",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          ¿Has olvidado tu contraseña?
        </Typography>
      </Box>
    </Container>
  );
}
