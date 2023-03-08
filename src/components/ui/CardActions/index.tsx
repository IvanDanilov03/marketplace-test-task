import { FC } from 'react';
import { CardActions as CardActionsMui, CardActionsProps } from '@mui/material';

export const CardActions: FC<CardActionsProps> = (props) => (
  <CardActionsMui {...props} />
);
