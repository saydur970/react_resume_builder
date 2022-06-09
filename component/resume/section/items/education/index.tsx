import { useState, useReducer, Fragment } from 'react';
import { resumeFontSize } from '../../..';
import { useResumeContext } from '../../../context/resume.context';
import { Grid, IconButton } from '@mui/material';
import { Typo } from '../../../../shared/typo';
import { SectionModel } from '../../sectionModel';
import { TxtField } from '../../../comp/txtField';
import { EduInputList } from './inputList';
import { TySectionInputProperty } from '../..';

export interface IEducationSectionInput {
  instituteName:  string;
  subject:  string;
  completionDate:  {
    year: number; month: string;
  }|null;
  result?:  string;
  comment?:  string;
}

export interface IEducationSectionInput2 {
  instituteName: TySectionInputProperty;
  subject: TySectionInputProperty;
  completionDate:  {
    year: number; month: string
  }|null;
  result: TySectionInputProperty;
  comment: TySectionInputProperty;
}

export type TEduItemDispatchAction =
  { type: 'initial_data_name', payload: string } |
  { type: 'skills_add', payload: string } |
  { type: 'skills_remove', payload: number }

export type IEduItemReducer = {
  inputs: IEducationSectionInput2,
  isValid: boolean;
}

const eduReducer = (state: IEduItemReducer, action: TEduItemDispatchAction): IEduItemReducer => {

  return { ...state }

}

export const EducationSection = () => {

  const { dataReducer, utilState, dataDispatch } = useResumeContext();
  const [eduInput, setEduInput] = useState<IEducationSectionInput|null>(null);

  const [eduItemInput, eduItemDispatch] = useReducer(eduReducer, {
    inputs: {
      instituteName: { value: '', isTouched: false, isValid: false },
      subject: { value: '', isTouched: false, isValid: false },
      completionDate: null,
      result: { value: '', isTouched: false, isValid: false, isOptional: true },
      comment: { value: '', isTouched: false, isValid: false, isOptional: true },
    },
    isValid: false
  })

  return (
    <Fragment>

      {
        utilState.currentSection === 'Education' &&
        <SectionModel
          mainHeader="Where did you study?"
          // secondaryHeader="Share the skills that make you shine"

          childrenInput={(
            <Grid item xs={12} container>
              <EduInputList eduInput={eduInput} setEduInput={setEduInput}
                eduItemInput={eduItemInput} eduItemDispatch={eduItemDispatch}
              />
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