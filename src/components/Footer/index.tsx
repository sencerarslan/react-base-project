import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { routesPaths } from "../../config/routes";
import i18n from "../../assets/i18n";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const pages = [
    {
      title: t("navigate.home"),
      link: routesPaths.public.home,
    },
    {
      title: t("navigate.about"),
      link: routesPaths.public.about,
    },
  ];
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((item: any, index: number) => (
              <Button
                key={index}
                onClick={() => {
                  navigate(`/${i18n.language}${item.link}`);
                }}
                sx={{ my: 2, color: "white", display: "block" }}>
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Typography>
              Copyright © 2023 Company Name. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              LOGO
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
