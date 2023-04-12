import { ReactNode } from "react";
import { BaseLayoutStyled } from "./index.styles";
import Container from "@mui/material/Container";
import Header from "../../Header";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <BaseLayoutStyled>
      <Header />
      <Container maxWidth="sm">{children}</Container>
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
