import { FC } from "react";
import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

export const FormControlLabel: FC<FormControlLabelProps> = (props) => (
  <MuiFormControlLabel {...props} />
);
