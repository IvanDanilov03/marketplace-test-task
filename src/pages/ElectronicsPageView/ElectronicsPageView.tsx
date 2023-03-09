import { FC } from "react";
import { Box } from "../../components/ui/Box";
import { Header } from "../../components/unsorted/Header";
import { useBreakpoints } from "../../hooks/useBreakpoints";

import { styles } from "./styles";

interface ElectronicsPageViewProps {}

export const ElectronicsPageView: FC<ElectronicsPageViewProps> = () => {
  const { isUpTablet } = useBreakpoints();
  return <Box sx={styles.root}>{isUpTablet && <Header />}</Box>;
};
