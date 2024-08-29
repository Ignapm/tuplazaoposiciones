import { Button, Typography } from "@mui/material";
import React from "react";

export default function Home({ onGenerateClick }) {
  return (
    <div>
      <Typography variant="h5">Inicio</Typography>
      <Button variant="contained" color="primary" onClick={onGenerateClick}>
        Generar Situación de Aprendizaje
      </Button>
    </div>
  );
}
