import { FC } from "react";

import { SvgIconProps } from "../../../types/styles";
import { SvgIcon } from "../../ui/SvgIcon";

export const ShoppingBagIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} width="18" height="22" viewBox="0 0 18 22">
    <g opacity="0.7">
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.28976 7.3562H3.30923C3.25868 7.3562 3.18375 7.4265 3.18084 7.47295L2.4585 19.1476L15.9544 19.1451L15.2249 7.47295C15.2221 7.42828 15.1453 7.3562 15.0965 7.3562H14.116V9.32145C14.116 9.86413 13.676 10.3041 13.1334 10.3041C12.5907 10.3041 12.1507 9.86413 12.1507 9.32145V7.3562L6.255 7.3562V9.32145C6.255 9.86413 5.81507 10.3041 5.27238 10.3041C4.72969 10.3041 4.28976 9.86413 4.28976 9.32145V7.3562Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.20304 0.478271C11.9151 0.478271 14.1162 2.6796 14.1162 5.38906L15.0967 5.39138C16.1832 5.39138 17.119 6.27035 17.1865 7.35079L17.9242 19.1539C17.9918 20.2361 17.1695 21.1133 16.0862 21.1133H2.31986C1.23715 21.1133 0.414376 20.2344 0.481904 19.1539L1.2196 7.35079C1.28723 6.26864 2.22103 5.39138 3.3094 5.39138H4.28993C4.28993 2.67813 6.4928 0.478271 9.20304 0.478271ZM12.1509 5.39149C12.1509 3.76503 10.8297 2.44362 9.20303 2.44362C7.57756 2.44362 6.25517 3.76421 6.25517 5.38917L12.1509 5.39149ZM4.28993 7.35657H3.3094C3.25886 7.35657 3.18392 7.42687 3.18102 7.47332L2.45867 19.148L15.9546 19.1455L15.2251 7.47332C15.2223 7.42864 15.1454 7.35657 15.0967 7.35657H14.1162V9.32181C14.1162 9.8645 13.6762 10.3044 13.1335 10.3044C12.5908 10.3044 12.1509 9.8645 12.1509 9.32181V7.35657L6.25518 7.35657L6.25518 9.32181C6.25518 9.8645 5.81524 10.3044 5.27255 10.3044C4.72987 10.3044 4.28993 9.8645 4.28993 9.32181V7.35657Z"
        fill="white"
      />
    </g>
  </SvgIcon>
);