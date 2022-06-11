// module
import { FC, Dispatch, SetStateAction } from 'react';
import { Grid, TextField } from '@mui/material';
// types
import { education_completion_default_date, 
  IEducationSectionGeneralProperty, 
IEduItemReducer, TEduItemDispatchAction } from '.';
import { TxtInput } from '../../../comp/txtInput';
import { DatePicker } from '../../../comp/datePicker';
import { TxtField } from '../../../comp/txtField';
import { TySectionInputProperty } from '../..';

interface IComp {
  eduItemReducer: IEduItemReducer;
  eduItemDispatch: Dispatch<TEduItemDispatchAction>
}

export const EduInputList: FC<IComp> = ({ eduItemReducer, eduItemDispatch }) => {

  const currentInputState = { ...eduItemReducer.generalInput };

  const dateYearHanlder = (value: number) => {
    eduItemDispatch({ type: 'extraInput_completionDate_year', payload: value });
  }

  const dateMonthHanlder = (value: string) => {
    eduItemDispatch({ type: 'extraInput_completionDate_month', payload: value });
  }

  const generalInputHanlder = 
  (key: IEducationSectionGeneralProperty, payloadValue: TySectionInputProperty) => {

    eduItemDispatch({
      type: 'general_input',
      payload: {
        id: key, value: payloadValue
      }
    });

    eduItemDispatch({
      type: 'check_validity',
      payload: {
        id: key, isValid: payloadValue.isValid
      }
    });


  }

  return (
    <Grid item xs={12} container justifyContent="space-between"
      sx={{
        '& > *': {
          marginBottom: '2.5rem'
        }
      }} >

      <Grid item xs={12} >
        <TxtField label="What Institute did you go to"
          inputProp={currentInputState.instituteName}
          changeHanlder={input => generalInputHanlder('instituteName', input)}
          validators={[{type: 'required', errMsg: 'Must be include instituteName'}]}
        />
      </Grid>

      <Grid item xs={12} >
        <TxtField label="What did you study?"
          inputProp={currentInputState.subject}
          changeHanlder={input => generalInputHanlder('subject', input)}
          validators={[{type: 'required', errMsg: 'Must be add subject'}]}
        />
      </Grid>


      <Grid item xs={5} >
        <TxtField label="What is your result?"
          inputProp={currentInputState.result}
          changeHanlder={input => generalInputHanlder('result', input)}
        />
      </Grid>

      <Grid item xs={6} >
        <DatePicker
          currentYear={
            eduItemReducer.extraInputs.completionDate?.year || 
            education_completion_default_date.year
          }
          currentMonth={
            eduItemReducer.extraInputs.completionDate?.month || 
            education_completion_default_date.month
          }
          yearHandler={dateYearHanlder}
          monthHandler={dateMonthHanlder}
        />
      </Grid>

      <Grid item xs={12} >
        <TxtField label="Write something?"
          inputProp={currentInputState.comment}
          changeHanlder={input => generalInputHanlder('comment', input)}
        />
      </Grid>

    </Grid>
  )

};