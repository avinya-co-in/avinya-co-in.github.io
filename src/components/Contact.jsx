import { Box, Container, Typography, Grid, Paper, Link } from '@mui/material';
const Contact = () => {
  return (
    <>
      <Box id="contact" sx={{ my: 4, scrollMarginTop: '100px' }}> {/* Adjust scroll position */}
        <Container maxWidth="lg">
          {/* Section Heading */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h4" fontWeight="bold" color="text.primary">
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={2}>
              Expand your business horizons with Avinya's unparalleled expertise! Contact us now to embark on your journey to success in the Indian market.
            </Typography>
          </Box>

          {/* Contact Details */}
          <Grid container spacing={2}>
            {/* Address */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2, minHeight: 150 }}>
                <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                  Our Address
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Avinya, Westgate, 4, SG Hwy Service Rd, Ahmedabad, Gujarat, 380015
                </Typography>
              </Paper>
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2, minHeight: 150 }}>
                <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                  Email Us
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <Link href="mailto:contact@avinya.co.in" color="primary" underline="hover">
                    contact@avinya.co.in
                  </Link>
                </Typography>
              </Paper>
            </Grid>

            {/* Phone */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2, minHeight: 150 }}>
                <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                  Call Us
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  +91 8980038802
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

    // <section id="contact" className="my-12">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-8">
    //       <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
    //       <p className="mt-2 text-gray-600 text-lg">Expand your business horizons with Avinya's unparalleled expertise! Contact us now to embark on your journey to success in the Indian market.</p>
    //     </div>

    //     <div className="flex flex-col md:flex-row gap-2">
    //       <div className="md:w-2/4 mb-6 md:mb-0">
    //         <div className="bg-white p-4 rounded-lg shadow-md">
    //           <h3 className="mt-4 text-xl font-semibold text-gray-800">Our Address</h3>
    //           <p className="mt-2 text-gray-600">Avinya, Westgate, 4, SG Hwy Service Rd, Ahmedabad, Gujarat, 380015</p>
    //         </div>
    //       </div>
    //       <div className="md:w-1/4 mb-6 md:mb-0">
    //         <div className="bg-white p-4 rounded-lg shadow-md">
    //           <h3 className="mt-4 text-xl font-semibold text-gray-800">Email Us</h3>
    //           <p className="mt-2 text-gray-600">
    //             <a href="mailto:contact@avinya.co.in" className="text-blue-500 hover:underline">contact@avinya.co.in</a>
    //           </p>
    //         </div>
    //       </div>
    //       <div className="md:w-1/4">
    //         <div className="bg-white p-4 rounded-lg shadow-md">
    //           <h3 className="mt-4 text-xl font-semibold text-gray-800">Call Us</h3>
    //           <p className="mt-2 text-gray-600">+91 8980038802</p>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </section>
  );
};

export default Contact;