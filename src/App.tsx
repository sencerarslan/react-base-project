import { useEffect } from "react";
import "./App.css";
import AppRoutes from "../src/components/app-routes";
import { useLocation, useNavigate } from "react-router-dom";
import i18n, { languages } from "./assets/i18n";
import { routesPaths } from "./config/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { trTR } from "@mui/x-date-pickers/locales";
import React from "react";
import { PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
declare module "@mui/material/styles" {
  interface Palette {
    custom: { color1: string };
  }
  interface PaletteOptions {
    custom: { color1: string };
  }
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const lang = location.pathname.split("/")[1];
    if (languages.includes(lang)) {
      lang && i18n.changeLanguage(lang);
    } else {
      navigate(routesPaths.base);
    }
  }, []);

  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = createTheme(
    {
      palette: {
        mode,
        primary: {
          main: "#0E708F",
        },
        secondary: {
          main: "#F44D1D",
        },
        ...(mode === "light"
          ? {
              // palette values for light mode
              custom: {
                color1: "#F0F4F9",
              },
            }
          : {
              // palette values for dark mode
              custom: {
                color1: "#27272b",
              },
            }),
      },
      shape: {
        borderRadius: 6,
      },
      typography: {
        fontFamily: "Open Sans",
      },
    },
    trTR
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
