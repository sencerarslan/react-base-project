import { ReactNode } from "react";

import { WideScreenLayoutStyled } from "./index.styles";

interface WideScreenLayoutProps {
  children: ReactNode;
}

const WideScreenLayout = ({ children }: WideScreenLayoutProps) => {
  return (
    <WideScreenLayoutStyled>
      <div>{children}</div>
    </WideScreenLayoutStyled>
  );
};

export default WideScreenLayout;
