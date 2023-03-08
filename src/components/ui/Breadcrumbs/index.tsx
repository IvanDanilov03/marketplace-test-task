import { FC } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps } from '@mui/material';

export const Breadcrumbs: FC<BreadcrumbsProps> = (props) => (
  <MuiBreadcrumbs {...props} />
);
