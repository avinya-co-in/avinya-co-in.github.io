import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LanguageIcon from '@mui/icons-material/Language';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FitbitIcon from '@mui/icons-material/Fitbit';
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
                {/* Service 1 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: colors.primary }, height:'250px', bgcolor:colors.cardColor }}
                    >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <LeaderboardIcon sx={{ color: 'primary.main' }} />
                      <Typography variant="h6" color="primary.main" fontWeight="600" style={{marginTop:'-4px'}}>
                          Lead Generation
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      We facilitate High Quality Lead gathering for improvement of your business.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Service 2 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: 'orange' }, height:'250px', bgcolor:colors.cardColor }}
                  >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <LanguageIcon sx={{ color: 'orange' }} />
                      <Typography variant="h6" sx={{ color: 'orange' }} fontWeight="600" style={{marginTop:'-4px'}}>
                        Digital Development
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      Our team expertise in developing digital solutions like Website development, social media branding, and other custom services.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Service 3 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: '#ad4456' }, height:'250px', bgcolor:colors.cardColor }}
                  >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <SupportAgentIcon sx={{ color: '#ad4456' }} />
                      <Typography variant="h6" sx={{ color: '#ad4456' }} fontWeight="600" style={{marginTop:'-4px'}}>
                        Consultant Service
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      Avinya team helps in improving your business by using our expertise to identify problems in your business.
                    </Typography>
                  </Paper>
                </Grid>

                {/* Service 4 */}
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={3}
                    sx={{ p: 4, borderRadius: 2, textAlign: 'center', transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: 'teal' }, height:'250px', bgcolor:colors.cardColor }}
                  >
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <FitbitIcon sx={{ color: 'teal' }} />
                      <Typography variant="h6" sx={{ color: 'teal' }} fontWeight="600" style={{marginTop:'-4px'}}>
                        Branding Solutions
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color={colors.text} mt={2}>
                      We craft a compelling brand identity that resonates with the Indian audience, setting the stage for long-term success.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
    // <section id="services" className="py-12 bg-white flex items-center">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-8">
    //       <h2 className="text-3xl font-bold text-gray-900">Services</h2>
    //       <h4 className="text-lg text-gray-700 mt-2">
    //         Unlock the potential of the Indian market with <br />
    //         <b>Avinya</b>'s comprehensive suite of B2B marketing and consulting services.
    //       </h4>
    //     </div>

    //     <div className="flex flex-col xl:flex-row gap-8">
    //       <div className="xl:w-5/12 flex justify-center">
    //         <img src="/services.png" className="max-w-full h-auto" alt="Services Illustration" />
    //       </div>
    //       <div className="xl:w-7/12">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //           <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
    //             <h4 className="text-xl font-semibold text-blue-600">Lead Generation</h4>
    //             <p className="text-gray-700 mt-2">
    //               We facilitate High Quality Lead gathering for improvement of your business.
    //             </p>
    //           </div>

    //           <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
    //             <h4 className="text-xl font-semibold text-orange-500">Digital Development</h4>
    //             <p className="text-gray-700 mt-2">
    //               Our team expertise in developing digital solutions like Website development, social media branding and other custom service.
    //             </p>
    //           </div>

    //           <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
    //             <h4 className="text-xl font-semibold text-pink-500">Consultanton Service</h4>
    //             <p className="text-gray-700 mt-2">
    //               Avinya team helps in improving your business by using our expertise to identify the problems in your business.
    //             </p>
    //           </div>

    //           <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
    //             <h4 className="text-xl font-semibold text-teal-500">Branding Solutions</h4>
    //             <p className="text-gray-700 mt-2">
    //               We craft a compelling brand identity that resonates with the Indian audience, setting the stage for long-term success.
    //             </p>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Services;