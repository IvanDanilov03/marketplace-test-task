import { FC } from 'react';
import { Card as CardMui, CardProps } from '@mui/material';

export const Card: FC<CardProps> = (props) => <CardMui {...props} />;
