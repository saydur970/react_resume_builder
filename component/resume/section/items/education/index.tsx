import { useState, useReducer, useEffect, Fragment } from 'react';
import { resumeFontSize } from '../../..';
import { useResumeContext } from '../../../context/resume.context';
import { Grid, IconButton } from '@mui/material';
import { Typo } from '../../../../shared/typo';
import { SectionModel } from '../../sectionModel';
import { TxtField } from '../../../comp/txtField';
import { EduInputList } from './inputList';
import { TySectionInputProperty } from '../..';

export type IEducationSectionGeneralProperty = 
'instituteName' | 'subject' | 'result' | 'comment';

export type IEducationSectionGeneralInput = {
  [key in IEducationSectionGeneralProperty]: TySectionInputProperty;
}

export type TEduItemDispatchAction =
  { type: 'extraInput_completionDate_year', payload: number } |
  { type: 'extraInput_completionDate_month', payload: string } |
  { type: 'general_input', payload: { 
    id: IEducationSectionGeneralProperty,
    value: TySectionInputProperty } 
  } |
  { type: 'check_validity', payload: { 
    id: IEducationSectionGeneralProperty,
    isValid: boolean } 
  };

export type IEduItemReducer = {
  generalInput: IEducationSectionGeneralInput;
  extraInputs: {
    completionDate: {
      year: number; month: string
    } | null;
  };
  isValid: boolean;
}

export const education_completion_default_date = {
  year: 2022, month: 'Jan'
}

const eduReducer = (state: IEduItemReducer, action: TEduItemDispatchAction): 
IEduItemReducer => {

  switch (action.type) {

    // =============== handle generalInput ===============
    case 'general_input': {

      return {
        ...state,
        generalInput: {
          ...state.generalInput,
          [action.payload.id]: {...action.payload.value}
        }
      }

    }


    // =============== handle completionDate year ===============
    case 'extraInput_completionDate_year': {

      const currentValue = state.extraInputs.completionDate ?
        { ...state.extraInputs.completionDate } : { ...education_completion_default_date }

      return {
        ...state,
        extraInputs: {
          ...state.extraInputs,
          completionDate: { ...currentValue, year: action.payload }
        }
      }
    };

    // =============== handle completionDate year ===============
    case 'extraInput_completionDate_month': {

      const currentValue = state.extraInputs.completionDate ?
        { ...state.extraInputs.completionDate } : { ...education_completion_default_date }

      return {
        ...state,
        extraInputs: {
          ...state.extraInputs,
          completionDate: { ...currentValue, month: action.payload }
        }
      }
    };

    // ===================== check validity =====================
    case 'check_validity': {

      let isValid = true;

      Object.keys(state.generalInput).forEach((item) => {

        const el = item as IEducationSectionGeneralProperty;
        const currentInput = state.generalInput[el];

        if(currentInput.isOptional !== true) {

          if(el === action.payload.id) {
            isValid = isValid && action.payload.isValid
          }
          else {
            isValid = isValid && currentInput.isValid;
          }

        }

      });


      return {
        ...state,
        isValid
      }

    }


    default:
      return { ...state }
  }


}

export const EducationSection = () => {

  const { dataReducer, utilState, dataDispatch } = useResumeContext();

  const [eduItemReducer, eduItemDispatch] = useReducer(eduReducer, {
    generalInput: {
      instituteName: { value: '', isTouched: false, isValid: false, errMsgList: [] },
      subject: { value: '', isTouched: false, isValid: false, errMsgList: [] },
      result: { value: '', isTouched: false, isValid: false, isOptional: true, errMsgList: [] },
      comment: { value: '', isTouched: false, isValid: false, isOptional: true, errMsgList: [] },
    },
    extraInputs: {
      completionDate: null
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
              <EduInputList eduItemReducer={eduItemReducer} 
                eduItemDispatch={eduItemDispatch}
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