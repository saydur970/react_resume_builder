import { useState, Fragment } from 'react';
import { resumeFontSize } from '../../..';
import { useResumeContext } from '../../../context/resume.context';
import { Grid, IconButton } from '@mui/material';
import { Typo } from '../../../../shared/typo';
import { SectionModel } from '../../sectionModel';
import { TxtField } from '../../../comp/txtField';
import { EduInputList } from './inputList';

export interface IEducationSectionInput {
  instituteName:  string;
  subject:  string;
  completionDate:  {
    year: number; month: string;
  }|null;
  result?:  string;
  comment?:  string;
}

export const EducationSection = () => {

  const { dataReducer, utilState, dataDispatch } = useResumeContext();

  const [eduInput, setEduInput] = useState<IEducationSectionInput|null>(null);

  console.log(eduInput);

  return (
    <Fragment>

      {
        utilState.currentSection === 'Education' &&
        <SectionModel
          mainHeader="Where did you study?"
          // secondaryHeader="Share the skills that make you shine"

          childrenInput={(
            <Grid item xs={12} container>
              <EduInputList eduInput={eduInput} setEduInput={setEduInput} />
            </Grid>
          )}

          childrenExample={(
            <Typo txt="example list" />
          )}

        />
      }

      <Grid item xs={12} container>
        
        <Typo txt="education" />

      </Grid>

    </Fragment>
  )
};