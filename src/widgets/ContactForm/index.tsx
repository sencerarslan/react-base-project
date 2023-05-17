import React, { useState } from "react";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PageStyled } from "./index.styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formState, setFormState] = useState<boolean>(true);
  const handleSubmit = (values: typeof initialValues) => {
    setFormState(false);
    setTimeout(() => {
      setFormState(true);
    }, 3000);
  };

  return (
    <PageStyled>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      {
        //asad
      }
      {formState ? (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          {({ dirty, isValid }) => (
            <Form>
              <Field
                name="name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={dirty && !isValid}
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                name="email"
                as={TextField}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={dirty && !isValid}
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                name="message"
                as={TextField}
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={dirty && !isValid}
                helperText={<ErrorMessage name="message" />}
              />
              <FormControl margin="normal" fullWidth>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      ) : (
        <h3>Thank you for your message!</h3>
      )}
    </PageStyled>
  );
};

export default ContactForm;
