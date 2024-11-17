import React from 'react';
import { Box, Typography, Link, Grid, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
    <Box component="footer" sx={{ backgroundColor: '#1F2937', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">Avinya</Typography>
            <Box mt={2}>
              <Typography variant="body2">
                Avinya, Westgate, 4, SG Hwy Service Rd,
                <br />
                Ahmedabad, Gujarat, 380015
                <br />
                India
                <br />
                <br />
                <strong>Phone:</strong> +91 89800 38802
                <br />
                <strong>Email:</strong>{' '}
                <Link href="mailto:contact@avinya.co.in" color="primary" underline="hover">
                  contact@avinya.co.in
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Useful Links
            </Typography>
            <Box>
              <Link href="#hero" color="primary" underline="hover" display="block" mb={1}>
                Home
              </Link>
              <Link href="#about" color="primary" underline="hover" display="block" mb={1}>
                About Us
              </Link>
              <Link href="#services" color="primary" underline="hover" display="block" mb={1}>
                Services
              </Link>
              <Link href="#" color="primary" underline="hover" display="block" mb={1}>
                Terms of Service
              </Link>
              <Link href="#" color="primary" underline="hover" display="block">
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Our Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="body2" display="block" mb={1}>Data Analysis</Typography>
            <Typography variant="body2" display="block" mb={1}>Web Development</Typography>
            <Typography variant="body2" display="block" mb={1}>In-Person Visit</Typography>
            <Typography variant="body2" display="block" mb={1}>Brand Advertising</Typography>
            <Typography variant="body2" display="block">B2B Marketing</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: '#111827', py: 4, mt: 4, mb:-10 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="#60A5FA">
              &copy; {new Date().getFullYear()} <strong>Avinya</strong>. All Rights Reserved
            </Typography>
            <Box>
              <Link
                href="https://www.linkedin.com/company/avinya-marketing"
                color="primary"
                aria-label="LinkedIn"
                sx={{ mx: 1 }}
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="https://wa.me/919624073799"
                color="primary"
                aria-label="WhatsApp"
                sx={{ mx: 1 }}
              >
                <WhatsAppIcon fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Container>
      </Box>
      {/* Footer Bottom */}

    </Box>
    </>
    // <footer id="footer" className="bg-gray-800 text-white">
    //   <div className="container mx-auto px-4 py-8">
    //     <div className="flex flex-col md:flex-row">
    //       {/* Contact Info */}
    //       <div className="md:w-1/3 mb-6 md:mb-0">
    //         <h3 className="text-xl font-semibold">Avinya</h3>
    //         <p className="mt-4">
    //           Avinya, Westgate,4, SG Hwy Service Rd, <br />
    //           Ahmedabad, Gujarat, 380015 <br />
    //           India
    //           <br />
    //           <br />
    //           <strong>Phone:</strong> +91 89800 38802
    //           <br />
    //           <strong>Email:</strong>{" "}
    //           <a
    //             href="mailto:contact@avinya.co.in"
    //             className="text-blue-400 hover:underline"
    //           >
    //             contact@avinya.co.in
    //           </a>
    //         </p>
    //       </div>

    //       {/* Useful Links */}
    //       <div className="md:w-1/3 mb-6 md:mb-0">
    //         <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
    //         <ul className="space-y-2">
    //           <li>
    //             <a
    //               href="#hero"
    //               className="text-blue-400 hover:underline"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#about"
    //               className="text-blue-400 hover:underline"
    //             >
    //               About Us
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#services"
    //               className="text-blue-400 hover:underline"
    //             >
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-blue-400 hover:underline"
    //             >
    //               Terms of Service
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="text-blue-400 hover:underline"
    //             >
    //               Privacy Policy
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Our Services */}
    //       <div className="md:w-1/3 mb-6 md:mb-0">
    //         <h4 className="text-lg font-semibold mb-4">Our Services</h4>
    //         <ul className="space-y-2">
    //           <li>
    //             Data Analysis
    //           </li>
    //           <li>
    //             Web Development
    //           </li>
    //           <li>
    //             In-Person Visit
    //           </li>
    //           <li>
    //             Brand Advertising
    //           </li>
    //           <li>
    //             B2B Marketing
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Newsletter */}
    //       {/* <div className="md:w-1/4">
    //         <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
    //         <form className="flex flex-col">
    //           <input
    //             type="email"
    //             name="email"
    //             className="p-2 mb-4 rounded border border-gray-700 bg-gray-900 text-white placeholder-gray-400"
    //             placeholder="Your Email"
    //           />
    //           <input
    //             type="submit"
    //             value="Subscribe"
    //             className="bg-blue-500 p-2 rounded text-white cursor-pointer hover:bg-blue-600"
    //           />
    //         </form>
    //       </div> */}
    //     </div>
    //   </div>

    //   {/* Footer Bottom */}
    //   <div className="bg-gray-900 py-4">
    //     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    //       <div className="text-center md:text-left text-gray-400">
    //         <div className="mb-2">
    //           &copy; {new Date().getFullYear()}{" "}
    //           <strong className="text-blue-400">Avinya</strong>. All Rights Reserved
    //         </div>
    //         <div>
    //           Designed by{" "}
    //           <a
    //             href="https://github.com/hardik88t/"
    //             className="text-blue-400 hover:underline"
    //           >
    //             hardik88t
    //           </a>
    //         </div>
    //       </div>
    //       <div className="flex justify-center md:justify-end mt-4 md:mt-0">
    //         <a
    //           href="https://www.linkedin.com/company/avinya-marketing"
    //           className="text-blue-400 hover:text-blue-500 mx-2"
    //           aria-label="LinkedIn"
    //         >
    //           <i className="bx bxl-linkedin text-xl"></i>
    //         </a>
    //         <a
    //           href="https://wa.me/919624073799"
    //           className="text-blue-400 hover:text-blue-500 mx-2"
    //           aria-label="WhatsApp"
    //         >
    //           <i className="bx bxl-whatsapp text-xl"></i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;