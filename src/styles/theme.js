import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000", // Color negro para el texto principal
      secondary: "#666666", // Un gris para texto secundario
      disabled: "#999999", // Un gris más claro para texto deshabilitado
      hint: "#BBBBBB", // Un gris claro para sugerencias o placeholders
    },
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default theme;
