import { FC, ReactNode } from 'react';
import { ResumeModal } from '../modal/resume.modal';
import { Grid } from '@mui/material';
import { Typo } from '../../shared/typo';
import { useResumeContext } from '../context/resume.context';


interface IComp {
  children: ReactNode;
  mainHeader: string;
  secondaryHeader?: string;
}

export const SectionModel: FC<IComp> = ({ children, mainHeader, secondaryHeader }) => {

  const { utilState, setUtilState } = useResumeContext();

  if(!utilState.isSectionModelOpen) return null;

  return (
    <ResumeModal 
      clickHanlder={
        () => {setUtilState({...utilState, isSectionModelOpen: false, currentSection: null}) }
      } 
    >

      <Grid item xs={12} sx={{ marginBottom: '1.5rem' }} >
        <Typo txt={mainHeader} variant="h3" weight={500} />
      </Grid>

      {
        secondaryHeader &&
        <Grid item xs={12} sx={{ marginBottom: '1.5rem' }} >
          <Typo txt={secondaryHeader} variant="h4" />
        </Grid>
      }

      {children}

    </ResumeModal>
  )
};