import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function LearningSituations() {
  const situations = [
    { id: 1, name: "Situación 1" },
    { id: 2, name: "Situación 2" },
    // Agregar más situaciones aquí
  ];

  return (
    <div>
      <Typography variant="h5">Mis Situaciones de Aprendizaje</Typography>
      <List>
        {situations.map((situation) => (
          <ListItem key={situation.id}>
            <ListItemText primary={situation.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
