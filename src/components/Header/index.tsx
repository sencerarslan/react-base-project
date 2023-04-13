import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { routesPaths } from "../../config/routes";
import { useState } from "react";
import i18n from "../../assets/i18n";
import { useTranslation } from "react-i18next";

function Header() {
  const settings = ["tr", "en", "de"];
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
  const [language, setLanguage] = useState<string>(i18n.language);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (lang: any) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setTimeout(() => {
      window.localStorage.setItem("currentLang", lang);
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Select Language">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <IconButton
                  style={{ color: "white" }}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit">
                  <LanguageIcon />
                </IconButton>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => {
                setAnchorElUser(null);
              }}>
              {settings.map((lng) => (
                <MenuItem
                  key={lng}
                  onClick={() => {
                    handleCloseUserMenu(lng);
                  }}>
                  <Typography
                    textAlign="center"
                    style={{ fontWeight: language === lng ? "bold" : "300" }}>
                    {lng.toUpperCase()}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
