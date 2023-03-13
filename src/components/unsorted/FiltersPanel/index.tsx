import { FC } from "react";

import { styles } from "./styles";

import { Box } from "../../ui/Box";
import { Divider } from "../../ui/Divider";
import { CheckboxFilter } from "../CheckboxFilter";
import { RangeFilter } from "../RangeFilter";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

export interface FiltersPanelProps {
  filterTitle: string;
  uniqueFilter: string[];
  selectedFilter: string[];
  setSelectedFilter: (value: React.SetStateAction<string[]>) => void;
  selectedRange: number[];
  setSelectedRange: (value: React.SetStateAction<number[]>) => void;
}

export const FiltersPanel: FC<FiltersPanelProps> = ({
  filterTitle,
  uniqueFilter,
  selectedFilter,
  setSelectedFilter,
  selectedRange,
  setSelectedRange,
}) => {
  const { isUpTablet } = useBreakpoints();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.checkboxFilter}>
        <Divider sx={styles.topDivider} />
        <CheckboxFilter
          filterTitle={filterTitle}
          uniqueFilter={uniqueFilter}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </Box>
      <Box sx={styles.rangeFilter}>
        {isUpTablet && <Divider sx={styles.bottomDivider} />}

        <RangeFilter
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        />
      </Box>
    </Box>
  );
};
