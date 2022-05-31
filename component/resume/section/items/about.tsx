import React, { useState, Fragment } from 'react'
import { Grid, TextField } from '@mui/material';
import { Typo } from '../../../shared/typo';
import { SectionModel } from '../sectionModel';
import { useResumeContext } from '../../context/resume.context';

export const AboutSection = () => {

  const { dataDispatch, dataReducer } = useResumeContext();

  return (
    <Fragment>

      <SectionModel
        mainHeader="How can you describe yourself?"
        secondaryHeader="Include 2-3 sentences about yourself"
      >

        <Grid item xs={12} sx={{ marginTop: '1.5rem' }} >

          <TextField id="standard-basic" label="Standard"
            variant="standard" fullWidth={true} value={dataReducer.About.data.value}
            onChange={e => dataDispatch({
              type: 'initial_data_name', payload: e.target.value
            })}
          />


        </Grid>

      </SectionModel>

      <Grid item xs={12} container >

        <Grid item xs={12}>
          <Typo txt={dataReducer.About.data.value} />
        </Grid>

      </Grid>

    </Fragment>
  )
};