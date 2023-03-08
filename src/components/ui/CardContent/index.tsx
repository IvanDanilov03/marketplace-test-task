import { FC } from 'react';
import { CardContent as CardContentMui, CardContentProps } from '@mui/material';

export const CardContent: FC<CardContentProps> = (props) => (
  <CardContentMui {...props} />
);
