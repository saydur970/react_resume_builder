import { useState, ChangeEvent, KeyboardEvent, Dispatch, SetStateAction, FC } from 'react';
import { TextField, Grid } from '@mui/material';
import { useResumeContext } from '../../context/resume.context';
import { TResumeDataDispatchAction } from '../../types/resume_state.type';
import { input_validators, inputValidate } from './validators';
import { TySectionInputProperty } from '../../section';
import { Typo } from '../../../shared/typo';

export type TyTxtChangeHandlerParam = { value: string, isValid: boolean };

interface IComp {
  submitHanlder?: () => void;
  label: string;
  validators?: input_validators[];
  inputProp: TySectionInputProperty;
  setInputProp?: Dispatch<SetStateAction<TySectionInputProperty>>;
  changeHanlder?: (input: TySectionInputProperty) => void;
}

export const TxtField: FC<IComp> = ({ inputProp, setInputProp, changeHanlder, submitHanlder, label, validators }) => {

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    const currentValue = e.target.value;
    const { isValid, errMsg } = inputValidate(currentValue, validators||[]);

    if(changeHanlder) {
      changeHanlder({
        ...inputProp,
        value: currentValue,
        isValid,
        errMsgList: [...errMsg]
      })
    }

    if(setInputProp) {
      setInputProp({
        ...inputProp,
        value: currentValue,
        isValid,
        errMsgList: [...errMsg]
      })
    }
  }

  const focusHandler = () => {
    if(!inputProp.isTouched) {
      const { isValid, errMsg } = inputValidate(inputProp.value, validators||[]);

      if(changeHanlder) {
        changeHanlder({
          ...inputProp,
          isValid,
          errMsgList: [...errMsg]
        })
      }

      if(setInputProp) {
        setInputProp({
          ...inputProp,
          isValid,
          errMsgList: [...errMsg]
        })
      }


    }

  }

  const blurHandler = () => {

    if(changeHanlder) {
      changeHanlder({
        ...inputProp,
        isTouched: true
      })
    }

    if(setInputProp) {
      setInputProp({
        ...inputProp,
        isTouched: true
      })
    }

  }

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    // handle if enter button is pressed and submitHanlder is provided
    if (e.key === 'Enter' && submitHanlder) {
      submitHanlder()
    }
  }


  return (
    <Grid item xs={12} container >

      <Grid item xs={12} >
        <TextField id="standard-basic" label={label}
          variant="standard" fullWidth={true} value={inputProp.value}
          multiline={submitHanlder ? false : true}
          onChange={e => onChangeHandler(e)}
          onBlur={blurHandler}
          onFocus={focusHandler}
          onKeyDown={e => keyDownHandler(e)}
          inputProps={{
            style: {
              fontSize: '1.4rem'
            }
          }}
          InputLabelProps={{
            style: {
              fontSize: '1.4rem'
            }
          }}
        />
      </Grid>

      <Grid item xs={12} sx={{ marginTop: '1rem' }} >
        {
          inputProp.errMsgList.length > 0 && inputProp.isTouched ? (
            <Typo txt={inputProp.errMsgList[0]} size="1.3rem" color="red" margin="0rem" />
          ) : ''
        }
      </Grid>

    </Grid>
  )

};