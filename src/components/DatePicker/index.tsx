import * as React from "react";
import * as S from "./index.styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { DateRange } from "@mui/icons-material";
import "dayjs/locale/tr";

export const CustomDatePicker = React.forwardRef(function CustomDatePicker(
  props: DatePickerProps<any>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
      <S.CustomDatePicker
        {...props}
        ref={ref}
        components={{ OpenPickerIcon: DateRange }}>
        <DatePicker />
      </S.CustomDatePicker>
    </LocalizationProvider>
  );
});
