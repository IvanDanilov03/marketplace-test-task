import { FC } from "react";
import { Link as MuiLink, LinkProps } from "@mui/material";

export const Link: FC<LinkProps> = (props) => <MuiLink {...props} />;
