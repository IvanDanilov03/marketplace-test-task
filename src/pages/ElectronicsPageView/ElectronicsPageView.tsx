import { FC } from "react";
import { Box } from "../../components/ui/Box";
import { Header } from "../../components/unsorted/Header";

import { styles } from "./styles";

interface ElectronicsPageViewProps {}

export const ElectronicsPageView: FC<ElectronicsPageViewProps> = () => {
  return (
    <Box sx={styles.root}>
      <Header mobileTitle="Electronics" />
    </Box>
  );
};
