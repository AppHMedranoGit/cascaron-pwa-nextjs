"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // cambia a "dark" si quieres dark mode
    primary: {
      main: "#1976d2", // azul por defecto MUI
    },
    secondary: {
      main: "#9c27b0", // morado
    },
    background: {
      default: "#f5f5f5", // fondo general
      paper: "#ffffff",   // tarjetas/paneles
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h6: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12, // bordes más redondeados
  },
});

export default theme;
