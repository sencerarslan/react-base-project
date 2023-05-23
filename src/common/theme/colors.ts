import { PaletteOptions } from "@mui/material";

export interface colorModel {
  color1: string;
  color2: string;
}

export const lightCustomColor: Partial<colorModel> = {
  color1: "#F0F4F9",
  color2: "#80ff00",
};
export const darkCustomColor: Partial<colorModel> = {
  color1: "#000",
  color2: "#cfff9e",
};

export const lightThemeColor: Partial<PaletteOptions> = {
  mode: "light",
  primary: {
    main: "#0E708F",
  },
  secondary: {
    main: "#F44D1D",
  },
  ...(lightCustomColor as colorModel),
};

export const darkThemeColor: Partial<PaletteOptions> = {
  mode: "dark",
  primary: {
    main: "#0E708F",
  },
  secondary: {
    main: "#F44D1D",
  },
  ...(darkCustomColor as colorModel),
};
