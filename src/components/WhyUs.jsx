import { Box, Container, Grid, ListItemIcon, Paper, Typography } from '@mui/material';
function WhyUs() {
  return (
    <>
      <Box id="why-us" sx={{ bgcolor: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Card 1 */}
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ p: 4, borderRadius: 2, transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: 'primary.main' } }}
              >
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  01
                </Typography>
                <Typography variant="h6" fontWeight="600" mt={2}>
                  Market Entry Specialists
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={2} sx={{ height: '5rem' }}>
                  Avinya specializes in guiding international B2B businesses for a successful entry into India's dynamic market.
                </Typography>
              </Paper>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ p: 4, borderRadius: 2, transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: 'primary.main' } }}
              >
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  02
                </Typography>
                <Typography variant="h6" fontWeight="600" mt={2}>
                  Tailored Strategies
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={2} sx={{ height: '5rem' }}>
                  We customize solutions to match your unique goals, budget, and timeline, ensuring maximum impact.
                </Typography>
              </Paper>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ p: 4, borderRadius: 2, transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: 'primary.main' } }}
              >
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                  03
                </Typography>
                <Typography variant="h6" fontWeight="600" mt={2}>
                  Expertise in Indian Market
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={2} sx={{ height: '5rem' }}>
                  Our team's in-depth understanding of the local business landscape and cultural intricacies ensures a smooth and rewarding transition.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
    // <section id="why-us" className="bg-white py-12">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col md:flex-row md:space-x-6">
    //       <div className="md:w-1/3 mb-6 md:mb-0">
    //         <div className="bg-white border hover:border-blue-700 p-6 rounded-lg shadow-lg">
    //           <span className="text-4xl font-bold text-blue-600">01</span>
    //           <h4 className="text-xl font-semibold mt-4">Market Entry Specialists</h4>
    //           <p className="text-gray-700 mt-2 h-20">
    //             Avinya specializes in guiding international B2B businesses for a successful entry into India's dynamic market.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="md:w-1/3 mb-6 md:mb-0">
    //         <div className="bg-white border hover:border-blue-700 p-6 rounded-lg shadow-lg">
    //           <span className="text-4xl font-bold text-blue-600">02</span>
    //           <h4 className="text-xl font-semibold mt-4">Tailored Strategies</h4>
    //           <p className="text-gray-700 mt-2 h-20">
    //             We customize solutions to match your unique goals, budget, and timeline, ensuring maximum impact.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="md:w-1/3">
    //         <div className="bg-white border hover:border-blue-700 p-6 rounded-lg shadow-lg">
    //           <span className="text-4xl font-bold text-blue-600">03</span>
    //           <h4 className="text-xl font-semibold mt-4">Expertise in Indian Market</h4>
    //           <p className="text-gray-700 mt-2 h-20">
    //             Our team's in-depth understanding of the local business landscape and cultural intricacies ensures a smooth and rewarding transition.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default WhyUs;