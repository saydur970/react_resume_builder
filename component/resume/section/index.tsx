import { FC } from 'react';
import { Grid } from '@mui/material';
import { TSectionItemName } from '../types/resume_state.type';
import { useResumeContext } from '../context/resume.context';
import { AboutSection } from './items/about';
import { Typo } from '../../shared/typo';

interface IComp {
  sectionName: TSectionItemName;
}

export const Section: FC<IComp> = ({ sectionName }) => {

  const { setUtilState } = useResumeContext();

  const sectionRender = () => {

    switch(sectionName) {
      case 'About':
        return <AboutSection />;
      default:
        return <Typo txt={sectionName} />;
    }

  }

  return (
    <Grid item xs={12} sx={{ margin: '2rem 0' }}
      onClick={() => setUtilState(prev =>
        ({ ...prev, currentSection: sectionName, isSectionModelOpen: true })
      )}
    >
      {sectionRender()}
    </Grid>
  )
};