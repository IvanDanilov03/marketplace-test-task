import { FC } from 'react';
import { Container as MuiContainer, ContainerProps } from '@mui/material';

export const Container: FC<ContainerProps> = (props) => (
  <MuiContainer {...props} />
);
