import { FC } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";

import { Box } from "../../components/ui/Box";
import { Header } from "../../components/unsorted/Header";
import { BreadcrumbsSection } from "../../components/sections/BreadcrumbsSection";
import { SortingSection } from "../../components/sections/SortingSection";
import { FilterElectronicsListSection } from "../../components/sections/FilterElectronicsListSection";

import { Electronics } from "../../types/api";

import { styles } from "./styles";

interface ElectronicsPageViewProps {
  content: Electronics[];
}

export const ElectronicsPageView: FC<ElectronicsPageViewProps> = ({
  content,
}) => {
  const { isUpTablet } = useBreakpoints();
  return (
    <Box sx={styles.root}>
      <Header mobileTitle="Electronics" />
      {isUpTablet && (
        <BreadcrumbsSection
          breadcrumbs={[
            { title: "Home", link: "", id: "Home" },
            { title: "Electronics", link: "", id: "Electronics" },
          ]}
        />
      )}
      <SortingSection />
      <FilterElectronicsListSection content={content} />
    </Box>
  );
};
