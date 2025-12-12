import {Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Typography, Stack} from '@mui/material';
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
                Find & Verify Indian Suppliers with <span style={{color: colors.primary}}>Avinya</span>
              </Typography>
              <Typography variant="h5" component="h2" mt={2} color={colors.text} sx={{fontSize: {xs: '1.1rem', md: '1.3rem', lg: '1.5rem'}, lineHeight: 1.4}}>
                Get verified supplier information and discover the best Indian suppliers for your business - completely free!
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  bgcolor: colors.primary + '15',
                  borderRadius: 2,
                  borderLeft: `4px solid ${colors.primary}`
                }}
              >
                <Typography variant="body1" fontWeight="600" color={colors.heading} mb={1}>
                  🎁 100% Free Service - No Limits!
                </Typography>
                <Typography variant="body2" color={colors.text}>
                  Submit your query and get info within 24 hours - absolutely free
                </Typography>
              </Box>

              <List sx={{mt: 3}}>
                <ListItem sx={{display: 'flex', py: 0.5}}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{width: 18, height: 18}} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography ml={{xs: -4, lg: -4}} color={colors.text} fontSize="1rem">
                        <strong>Find Best Indian Suppliers</strong> for any product or HS code
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
                        <strong>Verify Supplier Authenticity</strong> and physical addresses
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
                        <strong>24-Hour Response Time</strong> for all queries
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
                        <strong>Completely Free Service</strong> with no hidden charges
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
                  href="https://forms.gle/acUG3zBhicB327BcA"
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
                    boxShadow: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Find Supplier
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="https://forms.gle/ydhA6rwqsQDDig2D8"
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
                  Verify Supplier
                </Button>
              </Stack>

              <Typography variant="caption" color={colors.text} display="block" mt={2} sx={{opacity: 0.8}}>
                ✓ 100% Free Service  •  ✓ 24-Hour Response  •  ✓ No Limits
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
