import { FC } from "react";
import { Slider as MuiSlider, SliderProps } from "@mui/material";

export const Slider: FC<SliderProps> = (props) => <MuiSlider {...props} />;
