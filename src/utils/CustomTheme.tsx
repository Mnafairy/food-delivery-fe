import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 300,
  //     md: 660,
  //     lg: 980,
  //     xl: 1620,
  //   },
  // },
  palette: {
    primary: {
      main: "#18BA51",
    },
  },
});
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
