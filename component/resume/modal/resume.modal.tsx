import { useEffect, useState, FC, ReactNode, Fragment } from "react";
import { createPortal } from "react-dom";
import { Grid, IconButton } from '@mui/material';
import { muiZIndex } from "../../../lib/mui/theme";
import { SectionCard } from "../../shared/sectionCard";
import CloseIcon from '@mui/icons-material/Close';

interface IComp {
  children: ReactNode;
  clickHanlder: () => void;
}

export const ResumeModal: FC<IComp> = ({ children, clickHanlder }) => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, []);


  return mounted ?
    createPortal(
      <Fragment>
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)', zIndex: muiZIndex.resumeModal
          }} />
        <SectionCard Sx={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)', minWidth: '70%', maxWidth: '80%',
          minHeight: '50vh', maxHeight: '80vh', zIndex: muiZIndex.resumeModal + 1,
          overflow: 'auto'
        }}
        >
          <Grid container sx={{padding: '2rem'}}
            onClick={e => e.stopPropagation()}
          >

            <Grid item xs={12} container justifyContent="flex-end" >
              <IconButton
                onClick={clickHanlder}
              >
                <CloseIcon sx={{fill: '#e74c3c', transform: 'scale(1.3)'}} />
              </IconButton>
            </Grid>

            <Grid item xs={12} container justifyContent="center" >
              {children}
            </Grid>

          </Grid>
        </SectionCard>
      </Fragment>,
      document.getElementById("resume_portal")!
    )
    : null

};
