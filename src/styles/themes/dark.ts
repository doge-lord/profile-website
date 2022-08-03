import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { grey, lightGreen } from "@mui/material/colors";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: lightGreen[500],
    },
    background: {
      default: grey[900],
      // paper: `rgba(${grey[900]}, 0.9)`,
      alternate: grey[800],
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: -0.25,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      letterSpacing: 2,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          ownerState.selected
            ? {
                backgroundColor: "transparent !important",
                color: theme.palette.primary.main,
              }
            : undefined,
      },
    },
  },
};

export default responsiveFontSizes(createTheme(themeOptions));
