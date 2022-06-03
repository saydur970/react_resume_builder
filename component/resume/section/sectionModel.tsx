import { FC, ReactNode } from 'react';
import { ResumeModal } from '../modal/resume.modal';
import { Grid } from '@mui/material';
import { Typo } from '../../shared/typo';
import { useResumeContext } from '../context/resume.context';


interface IComp {
  childrenInput: ReactNode;
  childrenExample?: ReactNode;
  mainHeader: string;
  secondaryHeader?: string;
}

export const SectionModel: FC<IComp> = ({ childrenInput, childrenExample, mainHeader, 
  secondaryHeader }) => {

  const { utilState, setUtilState } = useResumeContext();

  if (!utilState.isSectionModelOpen) return null;

  const firstChildRender = () => (
    <>
      <Grid item xs={12} sx={{ marginBottom: '1.5rem' }} >
        <Typo txt={mainHeader} variant="h3" weight={500} />
      </Grid>

      {
        secondaryHeader &&
        <Grid item xs={12} sx={{ marginBottom: '1.5rem' }} >
          <Typo txt={secondaryHeader} variant="h4" />
        </Grid>
      }

      <Grid item xs={12} container>
        {childrenInput}
      </Grid>

    </>
  )

  const childRender = () => {

    if (childrenExample) {
      return (
        <Grid item xs={12} container alignItems="flex-start" justifyContent="space-between">

          <Grid item xs={5} container>
            {firstChildRender()}
          </Grid>

          <Grid item xs={5} container 
            sx={{backgroundColor: '#f8f8fa', padding: '1rem 2rem', maxHeight: '80vh', overflowY: 'auto'}} 
          >
            {childrenExample}
          </Grid>

        </Grid>
      )
    }

    return (
      <Grid item xs={12} container>
        {firstChildRender()}
      </Grid>
    )


  }

  return (
    <ResumeModal
      clickHanlder={
        () => { setUtilState({ ...utilState, isSectionModelOpen: false, currentSection: null }) }
      }
    >

      <Grid item xs={12} container sx={{ marginTop: '1.5rem', height: '70vh'}}>
        {childRender()}
      </Grid>

    </ResumeModal>
  )
};