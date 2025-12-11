import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LanguageIcon from '@mui/icons-material/Language';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DatasetIcon from '@mui/icons-material/Dataset';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeColors } from "./themeColors";

const Services = () => {
  const { mode } = useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  return (
    <>
      <Box id="services" sx={{ py: 12, bgcolor: colors.background, display: 'flex', alignItems: 'center' }} mt = {{xs:-6, md:0, lg:0}}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h4" fontWeight="bold" color={colors.primary}>
              Services
            </Typography>
            <Typography style={{fontSize:'17px'}} color={colors.text} mt={2}>
              Unlock the potential of the Indian market with <br />
              <Typography style={{fontSize:'17px'}} component='span' sx={{fontWeight : 'bold', color:colors.text}}>Avinya</Typography>'s comprehensive suite of B2B marketing and consulting services.
            </Typography>
          </Box>

          {/* Content */}
          <Grid container spacing={4}>
            {/* Image */}
            <Grid item xs={12} xl={5} display="flex" justifyContent="center">
              <img src="/services.png" alt="Services Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>

            {/* Services Grid */}
            <Grid item xs={12} xl={7}>
              <Grid container spacing={4}>
                {/* Service 1 - Import Export Data */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: colors.primary }, height:'250px', bgcolor:colors.cardColor }}
                  >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <DatasetIcon sx={{ color: colors.primary }} />
                      <Typography variant="h6" sx={{ color: colors.primary }} fontWeight="600" style={{marginTop:'-4px'}}>
                        Import-Export Data
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      Access verified trade data, customs records, and B2B contact details from any industry worldwide. Get 5 free samples!
                    </Typography>
                  </Paper>
                </Grid>

                {/* Service 2 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: colors.primary }, height:'250px', bgcolor:colors.cardColor }}
                  >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <SupportAgentIcon sx={{ color: colors.primary }} />
                      <Typography variant="h6" sx={{ color: colors.primary }} fontWeight="600" style={{marginTop:'-4px'}}>
                        Consultant Service
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      Avinya team helps in improving your business by using our expertise to identify problems in your business.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Service 3 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: colors.primary }, height:'250px', bgcolor:colors.cardColor }}
                    >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <LeaderboardIcon sx={{ color: colors.primary }} />
                      <Typography variant="h6" color={colors.primary} fontWeight="600" style={{marginTop:'-4px'}}>
                          Lead Generation
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      We facilitate High Quality Lead gathering for improvement of your business.
                    </Typography>
                  </Paper>
                </Grid>


                {/* Service 4 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: colors.primary }, height:'250px', bgcolor:colors.cardColor }}
                  >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <LanguageIcon sx={{ color: colors.primary }} />
                      <Typography variant="h6" sx={{ color: colors.primary }} fontWeight="600" style={{marginTop:'-4px'}}>
                        Digital Development
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      Our team expertise in developing digital solutions like Website development, social media branding, and other custom services.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;