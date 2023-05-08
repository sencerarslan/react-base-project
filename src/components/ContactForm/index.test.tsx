import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from ".";

describe("ContactForm", () => {
  test("renders a contact form", () => {
    render(<ContactForm />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  test("validates the form and displays errors", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Message is required")).toBeInTheDocument();
  });

  test("submits the form with valid data", async () => {
    render(<ContactForm />);
    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByLabelText("Message"), {
      target: { value: "Hello World!" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(
      await screen.findByText("Thank you for your message!")
    ).toBeInTheDocument();
  });
});
