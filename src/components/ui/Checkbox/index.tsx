import { FC } from "react";
import { Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";

export const Checkbox: FC<CheckboxProps> = (props) => (
  <MuiCheckbox {...props} />
);
