import { useEffect } from "react";
import "./App.css";
import AppRoutes from "../src/components/app-routes";
import { useLocation, useNavigate } from "react-router-dom";
import i18n, { languages } from "./assets/i18n";
import { routesPaths } from "./config/routes";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import React from "react";
import {
  CssBaseline,
  PaletteOptions,
  experimental_extendTheme,
} from "@mui/material";
import { lightThemeColor, darkThemeColor } from "./common/theme/colors";
import { useSelector } from "react-redux";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

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

  const currentTheme = useSelector((state: any) => state.theme.currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mui-color-scheme",
      currentTheme
    );
  }, []);

  const theme = experimental_extendTheme({
    colorSchemes: {
      light: {
        palette: lightThemeColor as PaletteOptions,
      },
      dark: {
        palette: darkThemeColor as PaletteOptions,
      },
    },
    shape: {
      borderRadius: 6,
    },
    typography: {
      fontFamily: "Open Sans",
    },
  });

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppRoutes />
      </div>
    </CssVarsProvider>
  );
}

export default App;
