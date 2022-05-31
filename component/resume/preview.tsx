import { Grid } from '@mui/material';
import { InitialDataSection } from './section/items/initial_data';
import { AboutSection } from './section/items/about';
import { useResumeContext } from './context/resume.context';
import { Section } from './section';
import { Fragment } from 'react';
import { SectionModel } from './section/sectionModel';

export const Preview = () => {

  const { sectionItemList } = useResumeContext();

  return (
    <Fragment>

      {/* <Grid item xs={12}>
        <SectionModel>

        </SectionModel>
      </Grid> */}

      <Grid item xs={12} container justifyContent="space-between"
        alignItems="flex-start"
        style={{ width: '794px !important', maxWidth: '794px !important' }}
        sx={{
          backgroundColor: '#fff', height: '60rem', margin: '5rem 0', padding: '4rem',
          minWidth: 793, maxWidth: 794, overflow: 'auto', width: '794 !important'
        }}
      >

        <Grid item xs={5} container>
          {
            sectionItemList.activeLeftList.map((el, idx) => (
              <Section key={`${el.sectionName}_${idx}`} sectionName={el.sectionName} />
            ))
          }
        </Grid>

        <Grid item xs={5} container>
          {
            sectionItemList.activeRightList.map((el, idx) => (
              <Section key={`${el.sectionName}_${idx}`} sectionName={el.sectionName} />
            ))
          }
        </Grid>

      </Grid>
    </Fragment>
  )
};