import { FC } from "react";
import { FormControl as MuiFormControl, FormControlProps } from "@mui/material";

export const FormControl: FC<FormControlProps> = (props) => (
  <MuiFormControl {...props} />
);
