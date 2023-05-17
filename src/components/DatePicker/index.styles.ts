import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";

// Example
//      ${alpha(theme.palette.primary.main, 0.15)};

export const CustomDatePicker = styled(DatePicker)<DatePickerProps<any>>(
  ({ theme }) => ` 
    .MuiInputBase-root{
        background-color: #F0F4F9;
        color:#7A808B;

        .MuiInputBase-inputSizeSmall,
        .MuiInputBase-sizeSmall{
            font-size:14px;
        }

        .MuiOutlinedInput-notchedOutline {
            border-color: transparent; 
        }
        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: #0098C2; 
        }
        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: #0098C2; 
            border-width:1px;
        }
        .MuiSvgIcon-root{
            font-size:16px;
        }
    }
    .MuiInputLabel-sizeSmall{
        font-size:14px;
        color:#7A808B;
    }
    `
);
