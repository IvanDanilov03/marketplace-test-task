import { FC } from "react";
import { FormGroup as MuiFormGroup, FormGroupProps } from "@mui/material";

export const FormGroup: FC<FormGroupProps> = (props) => (
  <MuiFormGroup {...props} />
);
