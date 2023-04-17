import { useEffect } from "react";
import "./App.css";
import AppRoutes from "../src/components/app-routes";
import { useLocation, useNavigate } from "react-router-dom";
import i18n, { languages } from "./assets/i18n";
import { routesPaths } from "./config/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FA8305",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
