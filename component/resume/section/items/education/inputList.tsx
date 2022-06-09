// module
import { FC, Dispatch, SetStateAction } from 'react';
import { Grid, TextField } from '@mui/material';
// types
import { IEducationSectionInput, IEduItemReducer, TEduItemDispatchAction } from '.';
import { TxtInput } from '../../../comp/txtInput';
import { DatePicker } from '../../../comp/datePicker';

interface IComp {
  eduInput: IEducationSectionInput | null;
  setEduInput: Dispatch<SetStateAction<IEducationSectionInput | null>>;

  eduItemInput: IEduItemReducer;
  eduItemDispatch: Dispatch<TEduItemDispatchAction>
}

const default_date = {
  year: 2022, month: 'Jan'
}

export const EduInputList: FC<IComp> = ({ eduInput, setEduInput }) => {

  const currentInputState: IEducationSectionInput = eduInput ? eduInput: {
    instituteName: '',
    subject: '',
    completionDate:  {
      ...default_date
    }
  };

  const currentDateState = eduInput && eduInput.completionDate ? 
  {...eduInput.completionDate} : {...default_date};

  const changeHander = (
    property: 'instituteName'| 'subject'| 'result'| 'comment', 
    value: string
  ) => {

    setEduInput({...currentInputState,
      ...(
        property === 'instituteName' ? { instituteName: value }:
        property === 'subject' ? { subject: value } : 
        // property === 'completionDate' ? { completionDate: value } : 
        property === 'result' ? { result: value } : 
        property === 'comment' ? { comment: value } : 
        {}
      )
    })
  }

  const dateYearHanlder = (value: number) => {
    setEduInput({
      ...currentInputState,
      completionDate: {
        ...currentDateState,
        year: value
      }
    })
  }

  const dateMonthHanlder = (value: string) => {
    setEduInput({
      ...currentInputState,
      completionDate: {
        ...currentDateState,
        month: value
      }
    })
  }

  // const dateHandler = (type: 'year'|'month', value: number|string) => {
  //   setEduInput({
  //     ...currentInputState,
  //     completionDate: {
  //       ...default_date,
  //       ...(
  //         type === 'year' ? { year: Number(value) } :
  //         { month: value.toString() }
  //       )
  //     }
  //   })
  // }

  return (
    <Grid item xs={12} container justifyContent="space-between"
      sx={{
        '& > *': {
          marginBottom: '2.5rem'
        }
    }} >

      <Grid item xs={12} >
        <TxtInput label="What Institute did you go to"
          value={eduInput?.instituteName||''} 
          valueOnChange={val => changeHander('instituteName', val)}
        />
      </Grid>

      <Grid item xs={12} >
        <TxtInput label="What did you study?"
          value={eduInput?.subject||''} 
          valueOnChange={val => changeHander('subject', val)}
        />
      </Grid>


      <Grid item xs={5} >
        <TxtInput label="What is your result?"
          value={eduInput?.result||''} 
          valueOnChange={val => changeHander('result', val)}
        />
      </Grid>

      <Grid item xs={6} >
        <DatePicker
          currentYear={eduInput?.completionDate?.year || default_date.year}
          currentMonth={eduInput?.completionDate?.month || default_date.month}
          yearHandler={dateYearHanlder}
          monthHandler={dateMonthHanlder}
        />
      </Grid>

      <Grid item xs={12} >
        <TxtInput label="Write something?"
          value={eduInput?.comment||''} 
          valueOnChange={val => changeHander('comment', val)}
        />
      </Grid>

    </Grid>
  )

};