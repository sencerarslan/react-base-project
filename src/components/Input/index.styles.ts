import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// Example
//      ${alpha(theme.palette.primary.main, 0.15)};

export const CustomInput = styled(TextField)<TextFieldProps>(
  ({ theme }) => ` 
    .MuiInputBase-root{
        background-color: ${theme.palette.custom.color1};
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
    }
    .MuiInputLabel-sizeSmall{
        font-size:14px;
        color:#7A808B;
    }
    `
);
