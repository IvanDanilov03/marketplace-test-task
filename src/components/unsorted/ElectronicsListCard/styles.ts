import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {
    py: 2,
    px: 2,
    display: "flex",
    bgcolor: "custom.white",
    border: "1px solid",
    borderRadius: "6px",
    borderColor: "greyPalette.300",
    alignItems: "center",
    columnGap: 2,
    ":hover": {
      cursor: "pointer",
    },
    [basicTheme.breakpoints.up("tablet")]: {
      columnGap: 3,
      py: 3,
    },
  },
  imageWrapper: {
    border: "1px solid red",
    p: 2,
    minWidth: 98,
    maxWidth: 98,
    height: 98,
    [basicTheme.breakpoints.up("tablet")]: {
      minWidth: 210,
      maxWidth: 210,
      height: 210,
    },
  },
  descriptionBox: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    mb: 2,
    color: "greyPalette.600",
    [basicTheme.breakpoints.up("tablet")]: {
      color: "custom.dark",
      mb: 4,
    },
  },
  price: {
    mb: 4,
    [basicTheme.breakpoints.up("tablet")]: {
      mb: 1,
    },
  },
  description: {
    my: 2,
  },
  link: {
    ":hover": {
      color: "custom.primary",
    },
  },
};
