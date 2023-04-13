import { ReactNode } from "react";
import { BaseLayoutStyled } from "./index.styles";
import Container from "@mui/material/Container";
import Header from "../../Header";
import Footer from "../../Footer";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <BaseLayoutStyled>
      <div className="page">
        <Header />
        <Container maxWidth="lg" className="content">
          {children}
        </Container>
        <Footer />
      </div>
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
