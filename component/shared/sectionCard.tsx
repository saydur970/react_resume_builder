import { FC, ReactNode } from 'react';
import { Card, CardContent, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

interface IComp {
  Sx?: SxProps<Theme>;
  children: ReactNode;
  withoutPadding?: boolean;
}

export const SectionCard: FC<IComp> = ({ Sx, children, withoutPadding }) => {

  if (withoutPadding) {
    return (
      <Card sx={Sx ? Sx : {}}>
        {children}
      </Card>
    )
  }

  return (
    <Card sx={Sx ? Sx : {}}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
};