import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import { HomePageStyled } from "./index.styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../assets/i18n";
import { useNavigate } from "react-router-dom";
import { routesPaths } from "../../config/routes";

export interface HomePageProps {}

const HomePage = () => {
  const [language, setLanguage] = useState<string>(i18n.language);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    i18n.changeLanguage(e.target.value);

    setLanguage(e.target.value);
    setTimeout(() => {
      navigate("/" + i18n.language + routesPaths.public.home);
      window.localStorage.setItem("currentLang", e.target.value);
    });
  };
  const { t } = useTranslation();

  return (
    <HomePageStyled>
      <div className="container">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Dil"
          onChange={handleChange}
        >
          <MenuItem value={"tr"}>TR</MenuItem>
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"de"}>DE</MenuItem>
        </Select>
      </div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/" + i18n.language + routesPaths.public.about);
          }}
        >
          Go about
        </Button>
      </div>
      <div>{t("homepage.desc.first")}</div>
    </HomePageStyled>
  );
};
export default HomePage;
