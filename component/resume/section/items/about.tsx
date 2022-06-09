import { Fragment } from 'react'
import { useResumeContext } from '../../context/resume.context';
import { Grid } from '@mui/material';
import { Typo } from '../../../shared/typo';
import { SectionModel } from '../sectionModel';
import { TxtField } from '../../comp/txtField';

export const AboutSection = () => {

  const { dataReducer, utilState } = useResumeContext();


  return (
    <Fragment>

      {
        utilState.currentSection === 'About' &&
        <SectionModel
          mainHeader="How can you describe yourself?"
          secondaryHeader="Include 2-3 sentences about yourself"

          childrenInput={(
          <Grid item xs={12}>
            <TxtField value={dataReducer.About}
              dispatchType={{ type: 'initial_data_name' }}
              label="Write about yourself"
            />
          </Grid>
          )}

        />
      }


      <Grid item xs={12} container >

        <Grid item xs={12}>
          <Typo txt={dataReducer.About || 'Include 2-3 sentences about yourself'} />
        </Grid>

      </Grid>

    </Fragment>
  )
};