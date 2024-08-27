import { Button, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  const handleGenerate = () => {
    // Lógica para generar una situación de aprendizaje
  };

  return (
    <div>
      <Typography variant="h5">Inicio</Typography>
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generar Situación de Aprendizaje
      </Button>
    </div>
  );
}
