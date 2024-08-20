import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo de recuperación de contraseña.
    setMessage(
      "Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña."
    );
  };

  const handleBackToLogin = () => {
    navigate("/");
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
      <Typography variant="h5" sx={{ mb: 3 }}>
        Recuperar contraseña
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "100%", mt: 1 }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          Enviar
        </Button>
        {message && (
          <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Box>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{
          mt: 2,
        }}
        onClick={handleBackToLogin} // Lógica para volver al login
      >
        Volver al inicio de sesión
      </Button>
    </Container>
  );
}
