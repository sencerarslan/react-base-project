import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from ".";

const setup = () => {
  const utils = render(<ContactForm />);

  // Data
  const data = {
    name: "Sencer",
    email: "m.sencerarslan@gmail.com",
  };

  // Form Element
  const name = screen.getByLabelText("Adınız Soyadınız") as HTMLInputElement;
  const email = screen.getByLabelText("E-posta Adresi") as HTMLInputElement;

  return {
    data,
    name,
    email,
    ...utils,
  };
};

test("Contact Form Test Method", async () => {
  const { data, name, email } = setup();

  // Set Data
  fireEvent.change(name, { target: { value: data.name } });
  fireEvent.change(email, { target: { value: data.email } });

  // Control
  expect(name.value).toBe(data.name);
  expect(email.value).toBe(data.email);
});
