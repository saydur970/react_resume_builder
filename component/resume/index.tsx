// module
import { useState } from 'react';
import { Grid } from '@mui/material';
// comp
import { OptionMenu } from './menu/optionMenu';
import { TResumeSectionLayout } from './types/resume_layout.type';
import { resumeSectionLayoutState } from './reducer/resume_layout.state';

export type TOptionMenuList = 'layout'| 'font'| 'theme';

export const Resume = () => {

  const [sectionItemList, setSectionItemList] = 
  useState<TResumeSectionLayout>(resumeSectionLayoutState);

  return (
    <Grid item xs={12} container>

      <OptionMenu
        sectionItemList={sectionItemList}
        setSectionItemList={setSectionItemList}
      />

    </Grid>
  )
};