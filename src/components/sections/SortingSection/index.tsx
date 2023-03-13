import { FC, useState } from "react";
import { SxProps } from "@mui/material";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

import { Typography } from "../../../components/ui/Typography";
import { CloseIcon } from "../../icons/CloseIcon";
import { DownloadIcon } from "../../icons/DownloadIcon";
import { UploadIcon } from "../../icons/UploadIcon";
import { Box } from "../../ui/Box";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { IconButton } from "../../ui/IconButton";
import { FiltersPanel } from "../../unsorted/FiltersPanel";

import { styles } from "./styles";
import { FilterActiveIcon } from "../../icons/FilterActiveIcon";

interface SortingSectionProps {
  sortFromLowToHigh: boolean;
  setSortFromLowToHigh: (value: React.SetStateAction<boolean>) => void;
  filterTitle: string;
  uniqueFilter: string[];
  selectedFilter: string[];
  setSelectedFilter: (value: React.SetStateAction<string[]>) => void;
  selectedRange: number[];
  setSelectedRange: (value: React.SetStateAction<number[]>) => void;
  maxValueForRange: number;
}

export const SortingSection: FC<SortingSectionProps> = ({
  sortFromLowToHigh,
  setSortFromLowToHigh,
  filterTitle,
  uniqueFilter,
  selectedFilter,
  setSelectedFilter,
  selectedRange,
  setSelectedRange,
  maxValueForRange,
}) => {
  const { isUpMobile, isUpTablet } = useBreakpoints();
  const [openFilterPanel, setOpenFilterPAnel] = useState(false);

  const buttonStyle = (active: boolean): SxProps =>
    active
      ? ({ ...styles.button, ...styles.activeButton } as SxProps)
      : styles.button;

  const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedFilter([]);
    setSelectedRange([0, 10000]);
  };

  return (
    <Container sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Button
          sx={buttonStyle(sortFromLowToHigh)}
          onClick={() => setSortFromLowToHigh(true)}
        >
          <Typography variant="textBtnSmall" sx={styles.buttonLabel}>
            Price: Low to High
          </Typography>
          <UploadIcon sx={styles.icon} />
        </Button>
        <Button sx={buttonStyle(!sortFromLowToHigh)}>
          <Typography
            variant="textBtnSmall"
            sx={styles.buttonLabel}
            onClick={() => setSortFromLowToHigh(false)}
          >
            Price: High to Low
          </Typography>
          <DownloadIcon sx={styles.icon} />
        </Button>
        {isUpMobile && !isUpTablet && (
          <IconButton
            sx={styles.iconButton}
            onClick={() => setOpenFilterPAnel(!openFilterPanel)}
          >
            {openFilterPanel ? (
              <CloseIcon sx={styles.filterIcon} />
            ) : (
              <FilterActiveIcon sx={styles.filterIcon} />
            )}
          </IconButton>
        )}
      </Box>
      {openFilterPanel && isUpMobile && !isUpTablet && (
        <Box sx={styles.filterBox}>
          <Button sx={styles.resetFilter} onClick={resetHandler}>
            <Typography color="custom.primary">Reset filter</Typography>
          </Button>
          <FiltersPanel
            filterTitle={filterTitle}
            uniqueFilter={uniqueFilter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedRange={selectedRange}
            setSelectedRange={setSelectedRange}
            maxValueForRange={maxValueForRange}
          />
        </Box>
      )}
    </Container>
  );
};
