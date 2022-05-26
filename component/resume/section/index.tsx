import { FC } from 'react';
import { Grid } from '@mui/material';
import { TSectionItemName } from '../types/resume_state.type';

interface IComp {
  sectionName: TSectionItemName;
}

export const Section: FC<IComp> = ({ sectionName }) => {
  return (
    <Grid item xs={12} sx={{ margin: '2rem 0' }} >
      {sectionName}
    </Grid>
  )
};