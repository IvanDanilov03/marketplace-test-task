import { FC } from "react";
import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material";

export const IconButton: FC<IconButtonProps> = (props) => (
  <MuiIconButton {...props} />
);
