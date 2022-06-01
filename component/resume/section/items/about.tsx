import React, { useState, Fragment } from 'react'
import { Grid, TextField } from '@mui/material';
import { Typo } from '../../../shared/typo';
import { SectionModel } from '../sectionModel';
import { useResumeContext } from '../../context/resume.context';
import { TxtField } from '../../comp/txtField';

export const AboutSection = () => {

  const { dataReducer } = useResumeContext();

  console.log(dataReducer.About.data.value)

  return (
    <Fragment>

      <SectionModel
        mainHeader="How can you describe yourself?"
        secondaryHeader="Include 2-3 sentences about yourself"
      >

        <Grid item xs={12} sx={{ marginTop: '1.5rem' }} >

          <TxtField value={dataReducer.About.data.value}
            dispatchType={{ type: 'initial_data_name' }}
            label="Write about yourself"
          />

        </Grid>

      </SectionModel>

      <Grid item xs={12} container >

        <Grid item xs={12}>
          <Typo txt={dataReducer.About.data.value || 'Enter about yourself'} />
        </Grid>

      </Grid>

    </Fragment>
  )
};