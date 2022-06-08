import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {

    // mode: 'dark', 

    primary: {
      main: '#1976d2'
      // main: '#f44336'
    },
    secondary: {
      main: '#f39c12'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#313b47'
    }
  },


});

export const muiZIndex = {
  resumeModal: 910
}

export const themeColor = {

  primary: '#1976d2'

}
