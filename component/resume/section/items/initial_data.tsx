import { Grid, TextField } from '@mui/material';
// context
import { useResumeContext } from '../../context/resume.context';

export const InitialDataSection = () => {


  return (
    <Grid item xs={12} container>

      <Grid item xs={12}>



      <TextField id="standard-basic" label="Standard" variant="standard"
      //      InputProps={{
      //       style: {
      //         color: '#000',
      //         borderBottom: '0.1rem solid #ccc'
      //       }
      //   }}
      //   InputLabelProps={{
      //     style: {
      //       color: '#000'
      //     }
      // }}
      />
      </Grid>

    </Grid>
  )
};