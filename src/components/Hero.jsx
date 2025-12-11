import {Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Typography, Stack} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Hero.css';
import {ThemeContext} from './ThemeContext';
import {themeColors} from './themeColors';
import {useContext} from 'react';

function Hero() {
  const {mode} = useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  return (
    <>
      <Box
        id="home"
        sx={{
          bgcolor: colors.background,  // Use the background color from the theme
          pt: {xs: 0, md: 16},  // Add padding-top to account for fixed navbar
          pb: 8,
          minHeight: '100vh',  // Changed from height to minHeight for better flexibility
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box display="flex" flexDirection={{xs: 'column-reverse', lg: 'row'}} alignItems="center">
            <Box
              sx={{
                flex: 1,
                pt: {xs: 4, lg: 0},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: {xs: 'center', lg: 'left'},
              }}
            >
              <Typography variant="h2" component="h1" fontWeight="bold" color={colors.heading} sx={{fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
                Unlock Global Trade Intelligence with <span style={{color: colors.primary}}>Avinya</span>
              </Typography>
              <Typography variant="h5" component="h2" mt={2} color={colors.text} sx={{fontSize: {xs: '1.1rem', md: '1.3rem', lg: '1.5rem'}, lineHeight: 1.4}}>
                Access verified import-export data, customs records, and B2B contact details from any industry worldwide
              </Typography>

              {/* <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  bgcolor: colors.primary + '15',
                  borderRadius: 2,
                  borderLeft: `4px solid ${colors.primary}`
                }}
              >
                <Typography variant="body1" fontWeight="600" color={colors.heading} mb={1}>
                  🎁 Special Offer: Get 5 FREE Sample Data Records!
                </Typography>
                <Typography variant="body2" color={colors.text}>
                  Email us your requirements and receive high-quality verified trade data samples instantly
                </Typography>
              </Box> */}

              <List sx={{mt: 3}}>
                <ListItem sx={{display: 'flex', py: 0.5}}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{width: 18, height: 18}} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{xs: -4, lg: -4}} color={colors.text} fontSize="1rem">
                        <strong>Verified Import-Export Data</strong> from 100+ countries
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{display: 'flex', py: 0.5}}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{width: 18, height: 18}} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{xs: -4, lg: -4}} color={colors.text} fontSize="1rem">
                        <strong>Real-time Shipment Records</strong> and customs declarations
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{display: 'flex', py: 0.5}}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{width: 18, height: 18}} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{xs: -4, lg: -4}} color={colors.text} fontSize="1rem">
                        <strong>Buyer & Supplier Contact Details</strong> with decision-maker info
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{display: 'flex', py: 0.5}}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{width: 18, height: 18}} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{xs: -4, lg: -4}} color={colors.text} fontSize="1rem">
                        <strong>Market Intelligence & Analytics</strong> for strategic decisions
                      </Typography>
                    }
                  />
                </ListItem>
              </List>

              <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={2}
                mt={4}
                sx={{alignItems: {xs: 'stretch', sm: 'center'}}}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="mailto:data@avinya.co.in?subject=Request for Free Import-Export Data Sample&body=Hello Avinya Team,%0D%0A%0D%0AI would like to request 5 free sample data for the following industry:%0D%0A%0D%0A[Please specify your industry/product]%0D%0A%0D%0AThank you!"
                  startIcon={<EmailIcon />}
                  sx={{
                    textTransform: 'none',
                    px: 4,
                    py: 1.8,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    boxShadow: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Get Free Sample
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="https://anvika.vercel.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    textTransform: 'none',
                    px: 4,
                    py: 1.8,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      bgcolor: colors.primary + '10',
                    },
                  }}
                >
                  Anvika Dashboard
                </Button>
              </Stack>

              <Typography variant="caption" color={colors.text} display="block" mt={2} sx={{opacity: 0.8}}>
                ✓ No credit card required  •  ✓ Instant access  •  ✓ 100% verified data
              </Typography>
            </Box>
            <Box flex={1} mt={{xs: 20, lg: 0}}>
              <Box
                component="img"
                src="/assets/img/output-onlinepngtools.png"
                style={{
                  filter: mode === 'dark' ? 'brightness(1.4) saturate(0.6) contrast(1.5)' : 'none',
                }}
                sx={{width: '100%'}}
                height={{xs: '250px', lg: 'auto'}}
                alt="Hero Image"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
