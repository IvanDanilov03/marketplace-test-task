import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {
    [basicTheme.breakpoints.up("tablet")]: {
      px: 10,
    },
  },
  contentMainBox: {
    [basicTheme.breakpoints.up("tablet")]: {
      p: 5,
      pb: 15,
      display: "flex",
      bgcolor: "custom.white",
      border: "1px solid",
      borderColor: "greyPalette.300",
      borderRadius: "6px",
    },
    [basicTheme.breakpoints.up("laptop")]: {
      pb: 27,
    },
  },
  imageWrapper: {
    bgcolor: "greyPalette.300",
    pt: 2,
    px: 4,
    pb: 5,
    minWidth: "100%",
    maxWidth: "100%",
    height: 305,
    [basicTheme.breakpoints.up("tablet")]: {
      p: 4,
      mr: 5,
      minWidth: 380,
      maxWidth: 380,
      height: 380,
      bgcolor: "custom.white",
      border: "1px solid",
      borderColor: "greyPalette.300",
      borderRadius: "6px",
    },
  },
  contentMain: {
    width: "100%",
    px: 4,
    [basicTheme.breakpoints.up("tablet")]: {
      px: 0,
      maxWidth: 430,
    },
  },
  button: {
    py: 2,
    mt: 2,
    mb: 4,
    background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
    width: "100%",
    borderRadius: "6px",
    [basicTheme.breakpoints.up("tablet")]: {
      mt: 3,
      mb: 8,
    },
    [basicTheme.breakpoints.up("laptop")]: {
      mb: 7,
    },
  },
  buttonTitle: {
    ml: 3,
    color: "custom.white",
  },
  title: {
    mt: 4,
    mb: 2,
    [basicTheme.breakpoints.up("tablet")]: {
      typography: "h4",
      mt: 0,
      mb: 3,
    },
  },
  list: {
    p: 0,
    display: "flex",
    flexDirection: "column",
    rowGap: 2,
    [basicTheme.breakpoints.up("tablet")]: {
      rowGap: 4,
    },
  },
  listItem: {
    p: 0,
    width: "100%",
    display: "flex",
    columnGap: 10,
    [basicTheme.breakpoints.up("tablet")]: {
      columnGap: 4,
    },
  },
  listItemTitle: {
    color: "greyPalette.500",
    width: "20%",
    [basicTheme.breakpoints.up("tablet")]: {
      typography: "textBase",
    },
  },
  listItemText: {
    width: "60%",
    color: "greyPalette.600",
    [basicTheme.breakpoints.up("tablet")]: {
      typography: "textBase",
    },
  },
  divider: {
    borderColor: "greyPalette.200",
  },
  descriptionBox: {
    px: 4,
    mt: 5,
    mb: 10,
    [basicTheme.breakpoints.up("tablet")]: {
      p: 5,
      pb: 15,
      mt: 7,
      display: "flex",
      bgcolor: "custom.white",
      border: "1px solid",
      borderColor: "greyPalette.300",
      borderRadius: "6px",
    },
    [basicTheme.breakpoints.up("laptop")]: {
      mt: 8,
    },
  },
};
