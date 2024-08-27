import React, { useState } from "react";
import { Typography, TextField, Button, Box, Modal } from "@mui/material";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña
    handleCloseModal();
  };

  return (
    <Box>
      <Typography variant="h5">Perfil</Typography>
      <TextField
        label="Nombre"
        value="John"
        fullWidth
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        label="Apellidos"
        value="Doe"
        fullWidth
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        label="Correo"
        value="john.doe@example.com"
        fullWidth
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Cambiar Contraseña
      </Button>

      {/* Modal para cambiar la contraseña */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Cambiar Contraseña
          </Typography>
          <TextField
            label="Contraseña Actual"
            type="password"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nueva Contraseña"
            type="password"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirmar Nueva Contraseña"
            type="password"
            fullWidth
            margin="normal"
          />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleChangePassword}
            >
              Cambiar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
