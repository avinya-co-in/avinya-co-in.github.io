import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';

const actions = [
  { icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://wa.me/918980038802', gradient: 'linear-gradient(#25d366,#25d366) 14% 84%/16% 16%' },
  { icon: <InstagramIcon />, name: 'Instagram', link: 'https://www.instagram.com/avinya-co-in', gradient: 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)' },
  { icon: <LinkedInIcon />, name: 'LinkedIn', link: 'https://www.linkedin.com/company/avinya-marketing/', gradient: 'linear-gradient(308deg, rgba(2,0,36,1) 0%, rgba(114,114,221,1) 60%, rgba(5,177,245,1) 89%, rgba(0,212,255,1) 100%)' },
  { icon: <FacebookIcon />, name: 'Facebook', link: 'https://www.linkedin.com/company/avinya-co-in', gradient: 'radial-gradient(circle, rgba(76,53,140,1) 69%, rgba(28,10,70,1) 81%, rgba(174,183,238,1) 82%)' }
];

export default function SocialMedia() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  // Handle click outside to close the SpeedDial
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.MuiSpeedDial-root')) {
        setOpen(false);
        setHover(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSpeedDialClick = () => {
    setOpen(!open);
    setHover(!hover); // Toggle the icon between WhatsApp and Close
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        height: 200,
        transform: 'translateZ(0px)',
        flexGrow: 1
      }}
      onMouseEnter={() => setHover(true)} // For web hover functionality
      onMouseLeave={() => setHover(false)} // Close on hover out
    >
      <SpeedDial
        ariaLabel="SpeedDial social media links"
        FabProps={{ size: 'small' }}
        open={open || hover} // Manage both hover and click opening
        onClick={handleSpeedDialClick} // For mobile click functionality
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          '& .MuiSpeedDial-fab': {
            backgroundColor: open || hover ? '#128C7E' : '#25d366', // Change color on open
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          },
        }}
        icon={open || hover ? <CloseIcon /> : <WhatsAppIcon />} // Toggle icon
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, '_blank')}
            sx={{
              background: action.gradient,
              color: 'white',
              opacity: 1,
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
