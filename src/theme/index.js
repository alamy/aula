import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#67159C",
      dark: "#49007a",
      light: "#946baf",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E82D92",
      dark: "#d10873",
      light: "#ea7cb7",
      contrastText: "#fff",
    },
    background: {
      default: "#19181F",
      paper: "#1E1E26",
    },
  },
});
