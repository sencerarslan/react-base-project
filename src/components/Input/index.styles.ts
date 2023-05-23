import TextField, { TextFieldProps } from "@mui/material/TextField";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { styled, css } from "@mui/material/styles";

// Example
//      ${alpha(theme.palette.primary.main, 0.15)};
// ${({ theme }) => theme.palette.custom.color1}

export const BaseCss = css`
  .MuiInputBase-root {
    background-color: var(--mui-palette-color1);
    color: #7a808b;

    .MuiInputBase-inputSizeSmall,
    .MuiInputBase-sizeSmall {
      font-size: 14px;
    }
  }

  .MuiInputLabel-sizeSmall {
    font-size: 14px;
  }

  .MuiInputBase-root:not(.Mui-error) {
    .MuiOutlinedInput-notchedOutline {
      border-color: transparent;
    }
    &:not(.Mui-disabled) {
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #0098c2;
      }
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #0098c2;
        border-width: 1px;
      }
    }
    &.Mui-disabled {
      opacity: 0.8;
    }

    .MuiInputLabel-sizeSmall {
      color: #7a808b;
    }

    .MuiSvgIcon-root {
      font-size: 20px;
    }
  }
`;

export const CustomInput = styled(TextField)<TextFieldProps>`
  ${BaseCss}
`;

export const CustomDatePicker = styled(DatePicker)<DatePickerProps<any>>`
  ${BaseCss}
`;
