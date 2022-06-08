import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { themeColor } from '../../lib/mui/theme';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1rem' }}>
      <AppBar position="static" sx={{backgroundColor: themeColor.primary}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}