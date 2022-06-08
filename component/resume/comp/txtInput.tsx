import { FC } from 'react';
import { TextField } from '@mui/material';

interface IComp {
  label: string;
  value: string;
  valueOnChange: (e: string) => void;
}

export const TxtInput: FC<IComp> = ({ value, valueOnChange, label }) => {
  return (
    <TextField id="standard-basic" variant="standard" fullWidth={true}
      label={label} value={value}
      onChange={e => valueOnChange(e.target.value)}
      inputProps={{style: {
        fontSize: '1.4rem'
      }}}
      InputLabelProps={{style: {
        fontSize: '1.4rem'
      }}}
    />
  )
};