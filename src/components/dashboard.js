import {
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import LearningSituations from "./LearningSituations";
import Home from "./Home";
import Profile from "./Profile";

export default function Dashboard() {
  const auth = useAuth();
  const [selectedPage, setSelectedPage] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!auth.user) {
    return <p>You need to log in to view this page.</p>;
  }

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (page) => {
    setSelectedPage(page);
    setDrawerOpen(false);
  };

  const renderPageContent = () => {
    switch (selectedPage) {
      case "home":
        return <Home />;
      case "learningSituations":
        return <LearningSituations />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <List>
          <ListItem button onClick={() => handleMenuClick("home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleMenuClick("learningSituations")}
          >
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Situaciones de Aprendizaje" />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("profile")}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem button onClick={auth.logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Desconectar" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {renderPageContent()}
      </Box>
    </Box>
  );
}
