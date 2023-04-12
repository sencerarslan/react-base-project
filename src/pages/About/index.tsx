import { useNavigate } from "react-router-dom";
import { routesPaths } from "../../config/routes";
import i18n from "../../assets/i18n";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const About = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <div>
      About
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/" + i18n.language + routesPaths.public.home);
          }}
        >
          Go home
        </Button>

        <div>{t("homepage.desc.first")}</div>
      </div>
    </div>
  );
};

export default About;
