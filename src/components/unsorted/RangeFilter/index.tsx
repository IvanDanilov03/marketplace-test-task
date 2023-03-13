import { FC, useState } from "react";

import { Box } from "../../ui/Box";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Slider } from "../../ui/Slider";
import { Typography } from "../../ui/Typography";

import { styles } from "./styles";

export interface RangeFilterProps {
  selectedRange: number[];
  setSelectedRange: (value: React.SetStateAction<number[]>) => void;
  maxValueForRange: number;
  resetFilter: boolean;
  setResetFilter: (value: React.SetStateAction<boolean>) => void;
}

export const RangeFilter: FC<RangeFilterProps> = ({
  selectedRange,
  setSelectedRange,
  maxValueForRange,
  resetFilter,
  setResetFilter,
}) => {
  const [value, setValue] = useState(selectedRange);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setResetFilter(false);
    setValue(newValue as number[]);
    setFirstInput(value[0]);
    setSecondInput(value[1]);
  };

  const [firstInput, setFirstInput] = useState(selectedRange[0]);

  const [secondInput, setSecondInput] = useState(selectedRange[1]);

  const handleFirstInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (firstInput < 0) {
      setFirstInput(0);
    } else if (firstInput > maxValueForRange) {
      setFirstInput(maxValueForRange);
    }
    setFirstInput(event.target.value === "" ? 0 : Number(event.target.value));
    value.splice(0, 1, firstInput);
  };

  const handleFirstBlur = () => {
    if (firstInput < 0) {
      setFirstInput(0);
      value.splice(0, 1, firstInput);
    } else if (firstInput > maxValueForRange) {
      setFirstInput(maxValueForRange);
      value.splice(0, 1, firstInput);
    }
  };

  const handleSecondInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (Number(event.target.value) > maxValueForRange) {
      setSecondInput(maxValueForRange);
      value[1] = secondInput;
    } else {
      setSecondInput(Number(event.target.value));
      value[1] = secondInput;
    }
  };

  const handleSecondBlur = () => {
    if (secondInput < 0) {
      setSecondInput(0);
      value.splice(1, 1, secondInput);
    } else if (secondInput > maxValueForRange) {
      setSecondInput(maxValueForRange);
      value.splice(1, 1, secondInput);
    }
  };

  const applyRangeHandler = () => {
    setResetFilter(false);
    setSelectedRange(value);
  };

  const sliderValue = resetFilter ? [0, maxValueForRange] : value;

  return (
    <Box sx={styles.root}>
      <Typography variant="h6">Price range</Typography>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        max={maxValueForRange}
        sx={styles.slider}
      />
      <Box sx={styles.inputsBox}>
        <Box>
          <Typography>Min</Typography>
          <Input
            sx={styles.input}
            value={resetFilter ? selectedRange[0] : firstInput}
            size="small"
            onChange={handleFirstInputChange}
            onBlur={handleFirstBlur}
            inputProps={{
              min: 0,
              max: { maxValueForRange },
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Box>
        <Box>
          <Typography>Max</Typography>
          <Input
            sx={styles.input}
            value={resetFilter ? selectedRange[1] : secondInput}
            size="small"
            onChange={handleSecondInputChange}
            onBlur={handleSecondBlur}
            inputProps={{
              min: 0,
              max: { maxValueForRange },
              step: 1,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Box>
      </Box>

      <Button onClick={applyRangeHandler} sx={styles.button}>
        <Typography color="custom.primary">Apply</Typography>
      </Button>
    </Box>
  );
};
