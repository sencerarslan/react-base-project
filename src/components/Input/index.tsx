import * as React from "react";
import { InputAdornment, TextFieldProps } from "@mui/material";
import * as S from "./index.styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/tr";
import "dayjs/locale/de";
import i18n from "../../assets/i18n";
import { DateRange } from "@mui/icons-material";

export const CustomInput = React.forwardRef(function CustomInput(
  props: TextFieldProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <S.CustomInput {...props} ref={ref} />;
});

export const CustomDatePicker = React.forwardRef(function CustomDatePicker(
  props: DatePickerProps<any>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={i18n.language}>
      <S.CustomDatePicker
        ref={ref}
        slotProps={{
          openPickerButton: { size: "small" },
          textField: {
            size: "small",
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <DateRange fontSize="small" />
                </InputAdornment>
              ),
            },
          },
        }}
        components={{
          OpenPickerIcon: DateRange,
        }}
        {...props}>
        <DatePicker />
      </S.CustomDatePicker>
    </LocalizationProvider>
  );
});

export default CustomInput;
