import { FC } from "react";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

import { Electronics } from "../../../types/api";
import { Box } from "../../ui/Box";
import { Container } from "../../ui/Container";
import { ElectronicsList } from "../../unsorted/ElectronicsList";
import { FiltersPanel } from "../../unsorted/FiltersPanel";

import { styles } from "./styles";

interface FilterElectronicsListSectionProps {
  content: Electronics[];
}

export const FilterElectronicsListSection: FC<
  FilterElectronicsListSectionProps
> = ({ content }) => {
  const { isUpTablet } = useBreakpoints();

  return (
    <Container sx={styles.root}>
      {isUpTablet && (
        <Box sx={styles.filtersPanelWrapper}>
          <FiltersPanel />
        </Box>
      )}

      <Box sx={styles.electronicsListWrapper}>
        <ElectronicsList content={content} />
      </Box>
    </Container>
  );
};
