import { basicTheme } from "../../../theme";
import { SxStyles } from "../../../types/styles";

export const styles: SxStyles = {
  root: {
    px: 4,
    [basicTheme.breakpoints.up("tablet")]: {
      px: 10,
    },
  },
  breadcrumbs: {
    py: 4,
  },
  breadcrumbsSeparator: {
    color: "greyPalette.500",
  },
};
