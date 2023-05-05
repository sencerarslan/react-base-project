import * as React from "react";
import { PageStyled } from "./index.styles";
import { Button, TextField, Box, Container } from "@mui/material";

function ContactForm() {
  return (
    <PageStyled>
      <Container maxWidth="xl">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off">
          <div>
            <TextField
              type="text"
              defaultValue=""
              label="Adınız Soyadınız"
              variant="filled"
            />
            <TextField
              type="email"
              defaultValue=""
              label="E-posta Adresi"
              variant="filled"
            />
          </div>
        </Box>
        <Button
          aria-label="send"
          variant="contained"
          typeof="button"
          onClick={() => {
            alert("Formunuz tarafımıza başarılı bir şekilde gönderildi!");
          }}>
          Send
        </Button>
      </Container>
    </PageStyled>
  );
}
export default ContactForm;
