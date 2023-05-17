import { AppBar, Toolbar, Container } from "@mui/material";

function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>FOOTER</Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
