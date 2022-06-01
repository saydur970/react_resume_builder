import { FC } from 'react';
import { TextField } from '@mui/material';
import { useResumeContext } from '../../context/resume.context';
import { TResumeDataDispatchAction } from '../../types/resume_state.type';



interface IComp {
  value: string | number;
  dispatchType: Omit<TResumeDataDispatchAction, 'payload'>;
  label: string;
}

export const TxtField: FC<IComp> = ({value, dispatchType, label}) => {

  const { dataDispatch } = useResumeContext();


  return (
    <TextField id="standard-basic" label={label}
      variant="standard" fullWidth={true} value={value} multiline={true}
      onChange={e => dataDispatch({
        type: dispatchType.type, payload: e.target.value
      })}
    />
  )

};