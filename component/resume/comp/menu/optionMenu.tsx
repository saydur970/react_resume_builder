// module
import { useState, FC } from 'react';
import { Grid, IconButton } from '@mui/material';
// comp
import { ResumeModal } from '../../modal/resume.modal';
import { SectionCard } from '../../../shared/sectionCard';
import { LayoutMenu } from './layoutMenu';
// icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
// types
import { TOptionMenuList } from '../..';

interface IComp {
}

export const OptionMenu: FC<IComp> = () => {

  const [showMenuModal, setShowMenuModal] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<TOptionMenuList|null>(null);

  const modalClickHanlder = () => {
    setCurrentMenu(null);
    setShowMenuModal(false);
  }

  const menuClickHanlder = (theme: TOptionMenuList) => {
    setCurrentMenu(theme);
    setShowMenuModal(true);
  }

  const menuCompRender = () => {
    switch(currentMenu) {


      case null:
        return null;
      
      case 'layout':
        return <LayoutMenu />;

      default:
        return null;

    }
  }


  return (
    <Grid item xs={12} container>

      <Grid item xs={12} container justifyContent="center" >
        <SectionCard withoutPadding={true}
          Sx={{padding: '0.5rem'}}
        >

          <Grid container justifyContent="center" >


            <IconButton sx={{marginRight: '2rem'}}
              onClick={()=> menuClickHanlder('font')}
            >
              <TextDecreaseIcon sx={{transform: 'scale(1.3)', marginRight: '0.5rem'}} /> 
              <span style={{fontSize: '1.5rem'}} > Font </span>
            </IconButton>

            <IconButton sx={{marginRight: '2rem'}}
              onClick={()=> menuClickHanlder('theme')}
            >
              <ModeEditOutlineIcon sx={{transform: 'scale(1.3)', marginRight: '0.5rem'}} /> 
              <span style={{fontSize: '1.5rem'}} > Theme </span>
            </IconButton>

            <IconButton sx={{marginRight: '2rem'}}
              onClick={()=> menuClickHanlder('layout')}
            >
              <DashboardCustomizeIcon sx={{transform: 'scale(1.3)', marginRight: '0.5rem'}} /> 
              <span style={{fontSize: '1.5rem'}} > Layout </span>
            </IconButton>


          </Grid>
          
        </SectionCard>
      </Grid>

      {
        showMenuModal &&
        <ResumeModal
          clickHanlder={modalClickHanlder}
        >
          {menuCompRender()}
        </ResumeModal>
      }

    </Grid>
  )
};