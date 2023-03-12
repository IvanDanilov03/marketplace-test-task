import { FC } from "react";
import { List as MuiList, ListProps } from "@mui/material";

export const List: FC<ListProps> = (props) => <MuiList {...props} />;
