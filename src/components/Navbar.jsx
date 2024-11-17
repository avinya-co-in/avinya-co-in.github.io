import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Mode from './Mode';
import { ThemeContext } from './ThemeContext';
import { themeColors } from './themeColors'; 

const pages = ['Home', 'About', 'Services', 'Contact', 'Career'];

function Navbar() {
  const { mode } = React.useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
  <AppBar position="fixed" sx={{ backgroundColor: colors.navbar, height: 'auto' }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: colors.text, // Text color based on theme
            textDecoration: 'none',
          }}
        >
          <a href="index.html" className="flex items-center">
            <img src="/logo.png" alt="Avinya" className="h-12 w-auto"
              style={{
                filter: mode === 'dark' ? 'invert(1)' : 'invert(0)', // Apply filter based on mode
              }}
            />
          </a>
        </Typography>

        <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: colors.text }} // Apply color for the menu icon
          >
            <MenuIcon style={{ color: colors.text }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  width: '100%',
                  mt: 1.5,
                  bgcolor: colors.background, // Menu background color based on mode
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                component='a'
                href={`#${page.toLowerCase()}`}
                sx={{
                  textAlign: 'center',
                  color: colors.text, // Menu item text color
                  backgroundColor: 'transparent',
                  '&:active': {
                    backgroundColor: 'rgba(255, 193, 7, 0.2)', // Custom tap effect color
                  },
                }}
              >
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: colors.text, // Text color for mobile view
            textDecoration: 'none',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <a href="index.html" className="flex items-center">
            <img src="/logo.png" alt="Avinya" className="h-12 w-auto"
              style={{
                filter: mode === 'dark' ? 'invert(1)' : 'invert(0)', // Apply filter based on mode
              }}
            />
          </a>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              href={`#${page.toLowerCase()}`}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: colors.text, display: 'block', fontWeight: 'bold' }} // Button text color
            >
              <Typography sx={{ fontFamily: 'sans-serif' }}>
                {page}
              </Typography>
            </Button>
          ))}
        </Box>

        <Box>
          {/* Pass the updateMode function to Mode component */}
          <Mode />
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
}
export default Navbar;
