import { basicTheme } from "../../../theme";
import { SxStyles } from "../../../types/styles";

export const styles: SxStyles = {
  root: {
    px: 4,
    mt: 4,
    mb: 10,
    display: 'flex',
    [basicTheme.breakpoints.up("tablet")]: {
      px: 10,
      mt: 3,
      display: 'flex',
      columnGap: 6,
    },
    [basicTheme.breakpoints.up("laptop")]: {
      mt: 5,
      columnGap: 8,
    },
  },
  filtersPanelWrapper: {
    width: "30%",
  },
  electronicsListWrapper: {
    width: "100%",
    [basicTheme.breakpoints.up("tablet")]: {
      width: "70%",
    },
  },
};
