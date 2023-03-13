import { FC } from "react";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

import { Electronics } from "../../../types/api";
import { Box } from "../../ui/Box";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { Typography } from "../../ui/Typography";
import { ElectronicsList } from "../../unsorted/ElectronicsList";
import { FiltersPanel } from "../../unsorted/FiltersPanel";

import { styles } from "./styles";

interface FilterElectronicsListSectionProps {
  content: Electronics[];
  filterTitle: string;
  uniqueFilter: string[];
  selectedFilter: string[];
  setSelectedFilter: (value: React.SetStateAction<string[]>) => void;
  selectedRange: number[];
  setSelectedRange: (value: React.SetStateAction<number[]>) => void;
  maxValueForRange: number;
  resetFilter: boolean;
  setResetFilter: (value: React.SetStateAction<boolean>) => void;

}

export const FilterElectronicsListSection: FC<
  FilterElectronicsListSectionProps
> = ({
  content,
  filterTitle,
  uniqueFilter,
  selectedFilter,
  setSelectedFilter,
  selectedRange,
  setSelectedRange,
  maxValueForRange,
  resetFilter,
  setResetFilter
}) => {
  const { isUpTablet } = useBreakpoints();

  const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedFilter([]);
    setSelectedRange([0, maxValueForRange]);
    setResetFilter(true)
  };

  return (
    <Container sx={styles.root}>
      {isUpTablet && (
        <Box sx={styles.filtersPanelWrapper}>
          <FiltersPanel
            filterTitle={filterTitle}
            uniqueFilter={uniqueFilter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedRange={selectedRange}
            setSelectedRange={setSelectedRange}
            maxValueForRange={maxValueForRange}
            resetFilter={resetFilter}
            setResetFilter={setResetFilter}
          />
          <Button sx={styles.resetFilter} onClick={resetHandler}>
            <Typography color="custom.primary">Reset filter</Typography>
          </Button>
        </Box>
      )}

      <Box sx={styles.electronicsListWrapper}>
        <ElectronicsList content={content} />
      </Box>
    </Container>
  );
};
