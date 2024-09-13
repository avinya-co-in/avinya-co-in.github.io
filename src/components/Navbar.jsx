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

const pages = ['Home', 'About', 'Services', 'Contact', 'Career'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mode, setMode] = React.useState(() => localStorage.getItem("theme") || "light");

  // Update the theme in Navbar whenever it changes in the Mode component
  const updateMode = (newMode) => {
    setMode(newMode);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: mode === 'light' ? 'white' : 'red', color: 'black',height:'auto' }}>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a href="index.html" className="flex items-center">
              <img src="/logo.png" alt="Avinya" className="h-12 w-auto" />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              style={{ color: 'black' }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                    backgroundColor: 'transparent',
                    '&:active': {
                      backgroundColor: 'rgba(255, 193, 7, 0.2)',  // Custom tap effect color
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
              color: 'inherit',
              textDecoration: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <a href="index.html" className="flex items-center">
              <img src="/logo.png" alt="Avinya" className="h-12 w-auto" />
            </a>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold' }}
              >
                <Typography sx={{ fontFamily: 'sans-serif' }}>
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box>
            {/* Pass the updateMode function to Mode component */}
            <Mode updateMode={updateMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

// import { useState } from "react";
// import { Menu } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-20 h-16">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//         {/* Logo */}
//         <a href="index.html" className="flex items-center">
//           <img src="/logo.png" alt="Avinya" className="h-12 w-auto" />
//         </a>

//         {/* Navigation */}
//         <nav className={`absolute top-full left-0 w-full bg-white md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:block'}`}>
//           <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0 text-lg">
//             <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#hero">Home</a></li>
//             <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#about">About</a></li>
//             <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#services">Services</a></li>
//             <li><a className="block py-2 text-gray-800 hover:text-blue-600 md:py-0" href="#contact">Contact</a></li>
//             <li>
//               <a className="block" href="#contact">
//                 <div className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200 w-max">
//                   Get Started
//                 </div>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-gray-800 hover:text-blue-600 transition-colors duration-200"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <Menu size={24} />
//         </button>
//       </div>
//     </header >
//   );
// };

// export default Navbar;