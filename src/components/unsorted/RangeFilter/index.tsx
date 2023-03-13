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
}

export const RangeFilter: FC<RangeFilterProps> = ({
  selectedRange,
  setSelectedRange,
}) => {
  const [value, setValue] = useState(selectedRange);

  const handleChange = (event: Event, newValue: number | number[]) => {
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
    } else if (firstInput > 10000) {
      setFirstInput(10000);
    }
    setFirstInput(event.target.value === "" ? 0 : Number(event.target.value));
    value.splice(0, 1, firstInput);
  };

  const handleFirstBlur = () => {
    if (firstInput < 0) {
      setFirstInput(0);
      value.splice(0, 1, firstInput);
    } else if (firstInput > 10000) {
      setFirstInput(10000);
      value.splice(0, 1, firstInput);
    }
  };

  const handleSecondInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (Number(event.target.value) > 10000) {
      setSecondInput(10000);
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
    } else if (secondInput > 10000) {
      setSecondInput(10000);
      value.splice(1, 1, secondInput);
    }
  };

  return (
    <Box sx={styles.root}>
      <Typography variant="h6">Price range</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        max={10000}
        sx={styles.slider}
      />
      <Box sx={styles.inputsBox}>
        <Box>
          <Typography>Min</Typography>
          <Input
            sx={styles.input}
            value={firstInput}
            size="small"
            onChange={handleFirstInputChange}
            onBlur={handleFirstBlur}
            inputProps={{
              min: -1,
              max: 10000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Box>
        <Box>
          <Typography>Max</Typography>
          <Input
            sx={styles.input}
            value={secondInput}
            size="small"
            onChange={handleSecondInputChange}
            onBlur={handleSecondBlur}
            inputProps={{
              min: 0,
              max: 10000,
              step: 1,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Box>
      </Box>

      <Button onClick={() => setSelectedRange(value)} sx={styles.button}>
        <Typography color="custom.primary">Apply</Typography>
      </Button>
    </Box>
  );
};
