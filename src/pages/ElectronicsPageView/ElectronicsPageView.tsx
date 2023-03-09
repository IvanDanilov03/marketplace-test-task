import { FC } from "react";
import { BreadcrumbsSection } from "../../components/sections/BreadcrumbsSection";
import { SortingSection } from "../../components/sections/SortingSection";
import { Box } from "../../components/ui/Box";
import { Header } from "../../components/unsorted/Header";
import { useBreakpoints } from "../../hooks/useBreakpoints";

import { styles } from "./styles";

interface ElectronicsPageViewProps {}

export const ElectronicsPageView: FC<ElectronicsPageViewProps> = () => {
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
    </Box>
  );
};
