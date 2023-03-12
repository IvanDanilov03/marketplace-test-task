import { FC } from "react";
import { ListItem as MuiListItem, ListItemProps } from "@mui/material";

export const ListItem: FC<ListItemProps> = (props) => (
  <MuiListItem {...props} />
);
