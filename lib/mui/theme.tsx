import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {

    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#f39c12'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff'
    }
  }


});
