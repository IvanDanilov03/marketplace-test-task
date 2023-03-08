import { FC } from "react";

import { SvgIconProps } from "../../../types/styles";
import { SvgIcon } from "../../ui/SvgIcon";

export const FilterActiveIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} width="18" height="18" viewBox="0 0 18 18">
    <path
      d="M5.25392 4.5H12.7539L8.99642 9.225L5.25392 4.5ZM3.19142 4.2075C4.70642 6.15 7.50392 9.75 7.50392 9.75V14.25C7.50392 14.6625 7.84142 15 8.25392 15H9.75392C10.1664 15 10.5039 14.6625 10.5039 14.25V9.75C10.5039 9.75 13.2939 6.15 14.8089 4.2075C15.1914 3.7125 14.8389 3 14.2164 3H3.78392C3.16142 3 2.80892 3.7125 3.19142 4.2075Z"
      fill="#0D6EFD"
    />
    <circle cx="14" cy="4" r="3" fill="#0D6EFD" />
  </SvgIcon>
);