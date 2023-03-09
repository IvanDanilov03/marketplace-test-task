import { createTheme } from "@mui/material";

export const basicTheme = createTheme({
  palette: {
    background: {
      default: "#F7FAFC",
    },
    custom: {
      white: "#FFFFFF",
      dark: "#1C1C1C",
      primary: "#0D6EFD",
      blue: "#8CB7F5",
      green: "#00B517",
      orange: "#FF9017",
      red: "#FA3434",
    },
    greyPalette: {
      600: "#505050",
      500: "#8B96A5",
      400: "#BDC4CD",
      300: "#DEE2E7",
      200: "#EFF2F4",
      100: "#F7FAFC",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1290,
      desktop: 1440,
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "48px",
      letterSpacing: "-1.6px",
      lineHeight: "58px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "32px",
      letterSpacing: "-0.2px",
      lineHeight: "39px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "24px",
      letterSpacing: "-0.2px",
      lineHeight: "32px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "20px",
      letterSpacing: "-0.2px",
      lineHeight: "28px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "18px",
      letterSpacing: 0,
      lineHeight: "22px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "16px",
      letterSpacing: 0,
      lineHeight: "19px",
    },
    textInfo: {
      fontWeight: 400,
      fontSize: "16px",
      letterSpacing: "-0.2px",
      lineHeight: "24px",
    },
    textSmall: {
      fontWeight: 400,
      fontSize: "13px",
      letterSpacing: 0,
      lineHeight: "16px",
    },
    textTitle: {
      fontWeight: 500,
      fontSize: "16px",
      letterSpacing: 0,
      lineHeight: "22px",
    },
    textBase: {
      fontWeight: 400,
      fontSize: "16px",
      letterSpacing: 0,
      lineHeight: "19px",
    },
  },
  spacing: 4,
});

export const theme = createTheme(
  {
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "textBase",
          color: "#000000",
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h2",
            subtitle2: "h2",
            textInfo: "p",
            textSmall: "p",
            textTitle: "p",
            textBase: "p",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "laptop",
        },
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            color: "inherit",
          },
        },
      },
    },
  },
  basicTheme
);
