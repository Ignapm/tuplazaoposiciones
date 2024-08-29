import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useAuth } from "../hooks/useAuth";
import CreateLearningSituation from "./CreateLearningSituation";
import Home from "./Home";
import LearningSituations from "./LearningSituations";
import Profile from "./Profile";

export default function Dashboard() {
  const auth = useAuth();
  const [selectedPage, setSelectedPage] = useState("home");
  const theme = useTheme();

  if (!auth.user) {
    return <p>You need to log in to view this page.</p>;
  }

  const handleMenuClick = (page) => {
    setSelectedPage(page);
  };

  const handleGenerateClick = () => {
    setSelectedPage("create-learning-situation");
  };

  const handleBackToHome = () => {
    setSelectedPage("home");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#ffffff",
          color: theme.palette.text.primary,
          boxShadow: "none",
          borderBottom: `1px solid black`,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 56 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 40, marginRight: 16 }}
            />
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
            <Button
              color="inherit"
              onClick={() => handleMenuClick("home")}
              sx={{
                mx: 2,
                color: theme.palette.text.primary,
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  color: theme.palette.ochre.main,
                  bgcolor: "transparent",
                },
              }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              onClick={() => handleMenuClick("learningSituations")}
              sx={{
                mx: 2,
                color: theme.palette.text.primary,
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  color: theme.palette.ochre.main,
                  bgcolor: "transparent",
                },
              }}
            >
              Mis Situaciones de Aprendizaje
            </Button>
            <Button
              color="inherit"
              onClick={() => handleMenuClick("profile")}
              sx={{
                mx: 2,
                color: theme.palette.text.primary,
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  color: theme.palette.ochre.main,
                  bgcolor: "transparent",
                },
              }}
            >
              Perfil
            </Button>
          </Box>

          <Button
            color="inherit"
            onClick={auth.logout}
            sx={{
              color: theme.palette.text.primary,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                color: theme.palette.ochre.main,
                bgcolor: "transparent",
              },
            }}
          >
            Desconectar
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selectedPage === "home" && (
          <Home onGenerateClick={handleGenerateClick} />
        )}
        {selectedPage === "learningSituations" && <LearningSituations />}
        {selectedPage === "profile" && <Profile />}
        {selectedPage === "create-learning-situation" && (
          <CreateLearningSituation onBackToHome={handleBackToHome} />
        )}
      </Box>
    </Box>
  );
}
