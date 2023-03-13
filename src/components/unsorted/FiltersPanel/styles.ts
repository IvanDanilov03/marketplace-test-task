import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  topDivider: {
    mb: 3,
  },
  rangeFilter: {
    width: "50%",
    order: -1,
    mb: 5,
    [basicTheme.breakpoints.up("tablet")]: {
      order: 1,
      mb: 0,
      width: "100%",
    },
  },
  bottomDivider: {
    my: 3,
    [basicTheme.breakpoints.up("tablet")]: {
      mt: 15,
    },
  },
};
