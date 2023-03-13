import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {},
  titleBox: {
    display: "flex",
    mb: 5,
    width: "50%",
  },
  applyButton: {
    ml: "auto",
    mr: "9px",
    minWidth: "auto",
  },
  arrowIcon: {
    ml: "auto",
  },
  fomControl: {
    width: "50%",
  },
  formControlLabel: {
    mr: 0,
    ".Mui-checked": {
      color: "custom.primary",
    },
    display: "flex",
    ml: 0,
    ".MuiCheckbox-root": {
      order: 1,
      ml: "auto",
    },
    [basicTheme.breakpoints.up("tablet")]: {
      ml: "-11px",
      mr: "auto",
      ".MuiCheckbox-root": {
        order: "-1",
        mr: "0",
      },
      ".MuiFormControlLabel-label": {
        order: 1,
      },
    },
  },
};
