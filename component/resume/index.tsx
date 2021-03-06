// module
import { useReducer, useState } from 'react';
import { Grid } from '@mui/material';
// comp
import { OptionMenu } from './comp/menu/optionMenu';
import { resumeDataReducer, resumeDataReducerInitial } from './reducer/resume_data.reducer';
import { resumeSectionLayoutState, resumeUtilState } from './reducer/resume_layout.state';
// context
import { ResumeContext } from './context/resume.context';
// types
import { TResumeSectionLayout } from './types/resume_layout.type';
import { Preview } from './comp/preview';

export type TOptionMenuList = 'layout'| 'font'| 'theme';

export const resumeFontSize = '1.4rem';

export const Resume = () => {

  const [sectionItemList, setSectionItemList] = 
  useState<TResumeSectionLayout>(resumeSectionLayoutState);
  const [ state, dispatch ] = useReducer(resumeDataReducer, resumeDataReducerInitial);
  const [utilState, setUtilState] = useState(resumeUtilState);

  return (
    <ResumeContext.Provider value={{
      sectionItemList, setSectionItemList,
      dataReducer: state, dataDispatch: dispatch,
      utilState, setUtilState
    }} >
    <Grid item xs={12} container justifyContent="center" >

      <OptionMenu />

      <Preview />

    </Grid>
    </ResumeContext.Provider>
  )
};