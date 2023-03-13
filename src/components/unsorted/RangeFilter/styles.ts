import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  slider: {
    color: "custom.primary",
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      bgcolor: "custom.white",
      border: "1px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
  },
  inputsBox: {
    display: "flex",
    columnGap: 4,
  },
  input: {
    mt: 1,
    px: 2,
    bgcolor: "custom.white",
    border: "1px solid",
    borderRadius: "6px",
    borderColor: "greyPalette.300",
  },
  button: {
    p: 2,
    mt: 2,
    ml: 18,
    width: "fit-content",
    bgcolor: "custom.white",
    border: "1px solid",
    borderRadius: "6px",
    borderColor: "greyPalette.300",
  },
};
