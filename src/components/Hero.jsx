import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import './Hero.css';
import { ThemeContext } from './ThemeContext';
import { themeColors } from './themeColors';
import { useContext } from 'react';

function Hero() {
  const { mode } = useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  return (
    <>
      <Box
        id="home"
        sx={{
          bgcolor: colors.background,  // Use the background color from the theme
          py: 8,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box display="flex" flexDirection={{ xs: 'column-reverse', lg: 'row' }} alignItems="center">
            <Box
              sx={{
                flex: 1,
                pt: { xs: 4, lg: 0 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              <Typography variant="h3" component="h1" fontWeight="bold" color={colors.heading}>
                Welcome to <span style={{ fontWeight: 'extra-bold' }}>Avinya</span>
              </Typography>
              <Typography variant="h5" component="h2" fontStyle="italic" mt={2} color={colors.text}>
                Your Gateway to the Indian Market!
              </Typography>
              <List sx={{ mt: 4 }}>
                <ListItem sx={{ display: 'flex' }}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{ width: 16, height: 16 }} mb={{ xs: 3, lg: 0 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{ xs: -4, lg: -4 }} color={colors.text}>
                        Expert assistance for companies wishing to expand business{' '}
                        <Typography component="span" sx={{ fontWeight: 'bold', color: colors.text }}>
                          Globally
                        </Typography>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{ width: 16, height: 16 }} mb={{ xs: 3, lg: 0 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{ xs: -4, lg: -4 }} color={colors.text}>
                        Comprehensive market analysis and strategic planning
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{ width: 16, height: 16 }} mb={{ xs: 3, lg: 0 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{ xs: -4, lg: -4 }} color={colors.text}>
                        Cultural expertise to ensure effective cross-border operations
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <Box mt={{ xs: 1, lg: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  sx={{
                    textTransform: 'none',
                    px: 5,
                    py: 1.5,
                    fontSize: '1rem',
                    borderRadius: '9999px',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
            <Box flex={1} mt={{ xs: 20, lg: 0 }}>
            <Box
              component="img"
              src="/assets/img/output-onlinepngtools.png"
              style={{
                filter: mode === 'dark' ? 'brightness(1.4) saturate(0.6) contrast(1.5)' : 'none',
              }}
              sx={{ width: '100%' }}
              height={{ xs: '250px', lg: 'auto' }}
              alt="Hero Image"
            />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
    // <section id="hero" className="bg-white py-8 h-screen flex items-center">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col-reverse lg:flex-row items-center">
    //       <div className="lg:w-1/2 pt-4 lg:pt-0 flex flex-col justify-center lg:text-left">
    //         <h1 className="text-3xl lg:text-6xl font-bold">
    //           Welcome to <span className="font-extrabold">Avinya</span>
    //         </h1>
    //         <h1 className="text-xl lg:text-4xl italic mt-2">
    //           Your Gateway to the Indian Market!
    //         </h1>
    //         <ul className="mt-4 space-y-2 text-sm lg:text-lg">
    //           <li className="flex items-start">
    //             <img src="/assets/icon/tick.svg" className="w-4 h-4 mr-2 flex-shrink-0" />
    //             <div>
    //               Expert assistance for companies wishing to expand business&nbsp;
    //               <span className="font-black">Globally</span>
    //             </div>
    //           </li>
    //           <li className="flex items-center">
    //             <img src="/assets/icon/tick.svg" className="w-4 h-4 mr-2" />
    //             Comprehensive market analysis and strategic planning
    //           </li>
    //           <li className="flex items-center">
    //             <img src="/assets/icon/tick.svg" className="w-4 h-4 mr-2" />
    //             Cultural expertise to ensure effective cross-border operations
    //           </li>
    //         </ul>
    //         <div className="mt-6">
    //           <a href="#contact" className="bg-blue-600 text-white text-lg py-3 px-5 rounded-full hover:bg-blue-700 transition-colors duration-200 ml-4">Get Started</a>
    //         </div>
    //       </div>
    //       <div className="lg:w-1/2 mb-6 lg:mb-0">
    //         <img src="/assets/img/hero-img.png" className="w-full h-auto" alt="Hero Image" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Hero;
