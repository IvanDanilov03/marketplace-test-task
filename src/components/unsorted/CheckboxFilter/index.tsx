import { FC, useState } from "react";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

import { Box } from "../../ui/Box";
import { Typography } from "../../ui/Typography";
import { ArrowUpIcon } from "../../icons/ArrowUpIcon";
import { FormControl } from "../../ui/FormControl";
import { FormGroup } from "../../ui/FormGroup";
import { Checkbox } from "../../ui/Checkbox";
import { FormControlLabel } from "../../ui/FormControlLabel";

import { styles } from "./styles";
import { IconButton } from "../../ui/IconButton";
import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { Button } from "../../ui/Button";

export interface CheckboxFilterProps {
  filterTitle: string;
  uniqueFilter: string[];
  selectedFilter: string[];
  setSelectedFilter: (value: React.SetStateAction<string[]>) => void;
}

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
  filterTitle,
  uniqueFilter,
  selectedFilter,
  setSelectedFilter,
}) => {
  const [isUpMobileBrands, setIsUpMobileBrands] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const { isUpMobile, isUpTablet, isUpLaptop } = useBreakpoints();

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = selectedFilter.indexOf(event.target.value);
    if (index === -1) {
      setSelectedFilter([...selectedFilter, event.target.value]);
    } else {
      setSelectedFilter(
        selectedFilter.filter((brand) => brand !== event.target.value)
      );
    }
  };

  const onMobileClickHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = isUpMobileBrands.indexOf(event.target.value);
    if (index === -1) {
      setIsUpMobileBrands([...isUpMobileBrands, event.target.value]);
    } else {
      setIsUpMobileBrands(
        isUpMobileBrands.filter((brand) => brand !== event.target.value)
      );
    }
  };

  const formControlMobile = (
    <FormControl sx={styles.fomControl}>
      <FormGroup>
        {uniqueFilter.map((item, index) => (
          <FormControlLabel
            key={index}
            label={item}
            value={item.replace(/\s/g, "-")}
            sx={styles.formControlLabel}
            control={
              <Checkbox
                checked={isUpMobileBrands.includes(`${item}`)}
                onChange={onMobileClickHandle}
                value={item.replace(/\s/g, "-")}
                sx={styles.checkbox}
              />
            }
          />
        ))}
      </FormGroup>
    </FormControl>
  );

  const formControl = (
    <FormControl>
      <FormGroup>
        {uniqueFilter.map((item, index) => (
          <FormControlLabel
            key={index}
            label={item}
            value={item}
            sx={styles.formControlLabel}
            control={
              <Checkbox
                checked={selectedFilter.includes(`${item}`)}
                onChange={handleBrandChange}
                value={`${item}`}
                sx={styles.checkbox}
              />
            }
          />
        ))}
      </FormGroup>
    </FormControl>
  );

  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleBox} onClick={() => setOpen(!open)}>
        <Typography variant="h6" sx={styles.title}>
          {filterTitle}
        </Typography>
        {isUpTablet && !isUpLaptop && (
          <IconButton onClick={() => setOpen(!open)} sx={styles.arrowIcon}>
            {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </IconButton>
        )}
        {isUpMobile && !isUpTablet && !isUpLaptop && (
          <Button
            onClick={() => setSelectedFilter(isUpMobileBrands)}
            sx={styles.applyButton}
          >
            <Typography color="custom.primary">Apply</Typography>
          </Button>
        )}
      </Box>
      {isUpMobile && !isUpTablet && !isUpLaptop && formControlMobile}
      {open && isUpTablet && !isUpLaptop && formControl}
      {isUpLaptop && formControl}
    </Box>
  );
};
