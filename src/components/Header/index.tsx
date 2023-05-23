import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Icon,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/reducers/themeReducer";
import { Public, Brightness7, Brightness4 } from "@mui/icons-material";
import i18n, { languages } from "../../assets/i18n";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { routesPaths } from "config/routes";

function Header() {
  const currentTheme = useSelector((state: any) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [opanLang, setOpenLang] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);
  const handleClose = (lang: string = currentLanguage) => {
    setCurrentLanguage(lang);
    setOpenLang(false);
    i18n.changeLanguage(lang);

    const pathParts = window.location.pathname.split("/");
    const url = pathParts.slice(2).toString().replaceAll(",", "/");
    navigate(
      url ? routesPaths.base + lang + "/" + url : routesPaths.base + lang
    );
    window.localStorage.setItem("currentLang", lang);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <div>HEADER</div>

            <div>
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  const th = currentTheme === "light" ? "dark" : "light";
                  dispatch(setTheme(th));
                }}
                color="inherit">
                {currentTheme === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              <IconButton
                sx={{ ml: 1 }}
                color="inherit"
                onClick={() => {
                  setOpenLang(true);
                }}>
                <Public />
              </IconButton>

              <Dialog onClose={() => handleClose()} open={opanLang}>
                <DialogTitle>Tercih ettiğiniz dili seçiniz.</DialogTitle>

                <List sx={{ pt: 0 }}>
                  {languages.map((item: any, index: number) => (
                    <ListItem disableGutters key={index}>
                      <ListItemButton
                        selected={currentLanguage === item}
                        onClick={() => handleClose(item)}
                        key={item}
                        color="inherit">
                        <ListItemAvatar sx={{ ml: 1, mr: 2, minWidth: 0 }}>
                          <Icon color="action">
                            <img
                              src={`/assets/images/flags/${item}.svg`}
                              alt={item}
                              width={"100%"}
                              height={"100%"}
                            />
                          </Icon>
                        </ListItemAvatar>
                        <ListItemText primary={t(`lang.${item}`)} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Dialog>
            </div>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
