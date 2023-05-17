import * as React from "react";
import { TextFieldProps } from "@mui/material";
import * as S from "./index.styles";

export const CustomInput = React.forwardRef(function CustomInput(
  props: TextFieldProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <S.CustomInput {...props} ref={ref} />;
});
