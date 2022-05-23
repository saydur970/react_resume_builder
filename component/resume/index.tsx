// module
import { useState } from 'react';
import { Grid } from '@mui/material';
// comp
import { OptionMenu } from './menu/optionMenu';
import { resumeSectionLayoutState } from './reducer/resume_layout.state';
// style
import { TResumeSectionLayout } from './types/resume_layout.type';
import { ResumeContext } from './context/resume.context';

export type TOptionMenuList = 'layout'| 'font'| 'theme';

export const Resume = () => {

  const [sectionItemList, setSectionItemList] = 
  useState<TResumeSectionLayout>(resumeSectionLayoutState);

  return (
    <ResumeContext.Provider value={{
      sectionItemList, setSectionItemList
    }} >
    <Grid item xs={12} container>

      <OptionMenu />

    </Grid>
    </ResumeContext.Provider>
  )
};