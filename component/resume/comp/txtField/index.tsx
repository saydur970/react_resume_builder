import { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction, FC } from 'react';
import { TextField } from '@mui/material';
import { useResumeContext } from '../../context/resume.context';
import { TResumeDataDispatchAction } from '../../types/resume_state.type';



interface IComp {
  value: string | number;
  setState?: Dispatch<SetStateAction<string>>;
  dispatchType?: Omit<TResumeDataDispatchAction, 'payload'>;
  submitHanlder?: () => void;
  label: string;
}

export const TxtField: FC<IComp> = ({value, dispatchType, setState, submitHanlder, label}) => {

  const { dataDispatch } = useResumeContext();


  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    // update local state
    if(setState) {
      setState(e.target.value);
    }
    // update the data reducer 
    else if(dispatchType) {

      // if condition needed, for ts error
      if(dispatchType.type === 'initial_data_name') {
        dataDispatch({
          type: dispatchType.type, payload: e.target.value
        })
      }

    }
  }

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    // handle if enter button is pressed and submitHanlder is provided
    if(e.key === 'Enter' && submitHanlder) {
      submitHanlder()
    }
  }


  return (
    <TextField id="standard-basic" label={label}
      variant="standard" fullWidth={true} value={value} 
      multiline={submitHanlder ? false: true}
      onChange={e => changeHandler(e)}
      onKeyDown={e => keyDownHandler(e)}
      inputProps={{style: {
        fontSize: '1.4rem'
      }}}
      InputLabelProps={{style: {
        fontSize: '1.4rem'
      }}}
    />
  )

};