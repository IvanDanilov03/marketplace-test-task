import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {
    [basicTheme.breakpoints.up("tablet")]: {
      px: 10,
    },
  },
  wrapper: {
    px: 4,
    py: 3,
    bgcolor: "custom.white",
    display: "flex",
    alignItems: "center",
    columnGap: 1,
    justifyContent: "end",
    [basicTheme.breakpoints.up("tablet")]: {
      pl: 0,
      pr: 3,
      border: "1px solid",
      borderColor: "greyPalette.300",
      borderRadius: "6px",
    },
  },
  button: {
    p: "6px",
    border: "1px solid",
    borderColor: "greyPalette.300",
    borderRadius: "6px",
    [basicTheme.breakpoints.up("tablet")]: {
      p: "10px",
      border: "1px solid",
      borderColor: "greyPalette.300",
      borderRadius: "6px",
    },
  },
  buttonLabel: {
    textAlign: "left",
    [basicTheme.breakpoints.up("tablet")]: {
      typography: "textBase",
    },
  },
  iconButton: {
    p: "6px",
    border: "1px solid",
    borderColor: "greyPalette.300",
    borderRadius: "6px",
    ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
      borderRadius: "6px",
    },
  },
  icon: {
    ml: 3,
    color: "greyPalette.500",
    width: "18px",
    height: "18px",
    [basicTheme.breakpoints.up("tablet")]: {
      typography: "textBase",
      width: "24px",
      height: "24px",
    },
  },
  filterIcon: {
    width: "18px",
    height: "18px",
  },
};
