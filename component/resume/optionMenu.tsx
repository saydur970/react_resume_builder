// module
import { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
// comp
import { ResumeModal } from './modal/resume.modal';
import { SectionCard } from '../shared/sectionCard';
// icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';

export const OptionMenu = () => {

  const [showMenuModal, setShowMenuModal] = useState(true);


  return (
    <Grid item xs={12} container>

      <Grid item xs={12} container justifyContent="center" >
        <SectionCard withoutPadding={true}
          Sx={{padding: '0.5rem'}}
        >

          <Grid container justifyContent="center" >


            <IconButton sx={{marginRight: '2rem'}}>
              <TextDecreaseIcon sx={{transform: 'scale(1.3)', marginRight: '0.5rem'}} /> 
              <span style={{fontSize: '1.5rem'}} > Font </span>
            </IconButton>

            <IconButton sx={{marginRight: '2rem'}} >
              <ModeEditOutlineIcon sx={{transform: 'scale(1.3)', marginRight: '0.5rem'}} /> 
              <span style={{fontSize: '1.5rem'}} > Theme </span>
            </IconButton>

            <IconButton sx={{marginRight: '2rem'}}>
              <DashboardCustomizeIcon sx={{transform: 'scale(1.3)', marginRight: '0.5rem'}} /> 
              <span style={{fontSize: '1.5rem'}} > Layout </span>
            </IconButton>


          </Grid>
          
        </SectionCard>
      </Grid>

      {
        showMenuModal &&
        <ResumeModal
          clickHanlder={ ()=> setShowMenuModal(false) }
        >
          <div >
            hi there
          </div>
        </ResumeModal>
      }

    </Grid>
  )
};