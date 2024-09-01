import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const actions = [
  { index: 0, icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://wa.me/918980038802' },
  { index: 1, icon: <InstagramIcon />, name: 'Instagram', link: 'https://www.instagram.com/avinya-co-in' },
  { index: 2, icon: <LinkedInIcon />, name: 'LinkedIn', link: 'https://www.linkedin.com/company/avinya-co-in' },
];

export default function SocialMedia() {
  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial social media links"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          // transformStyle: 'none',
          '& .MuiSpeedDial-fab': {
            backgroundColor: '#25d366',
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          },
        }}
        icon={<WhatsAppIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, '_blank')}
            sx={{
              backgroundColor: '#25d366',
              color: 'white',
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