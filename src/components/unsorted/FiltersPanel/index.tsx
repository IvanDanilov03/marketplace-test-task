import { FC } from "react";

import { styles } from "./styles";

import { Box } from "../../ui/Box";
import { Typography } from "../../ui/Typography";

export interface FiltersPanelProps {}

export const FiltersPanel: FC<FiltersPanelProps> = ({}) => {
  return (
    <Box sx={styles.root}>
      <Typography>Filters</Typography>
    </Box>
  );
};
