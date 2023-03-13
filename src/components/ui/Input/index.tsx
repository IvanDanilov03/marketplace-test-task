import { FC } from "react";
import { Input as MuiInput, InputProps } from "@mui/material";

export const Input: FC<InputProps> = (props) => <MuiInput {...props} />;
