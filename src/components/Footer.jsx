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
              <Link href="https://anvika.vercel.app/dashboard" color="primary" underline="hover" display="block" mb={1}>
                Anvika Login
              </Link>
              <Link href="#about" color="primary" underline="hover" display="block" mb={1}>
                About Us
              </Link>
              <Link href="#services" color="primary" underline="hover" display="block" mb={1}>
                Services
              </Link>
              {/* <Link href="#" color="primary" underline="hover" display="block" mb={1}>
                Terms of Service
              </Link>
              <Link href="#" color="primary" underline="hover" display="block">
                Privacy Policy
              </Link> */}
            </Box>
          </Grid>

          {/* Our Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Services
            </Typography>
            <Typography variant="body2" display="block" mb={1}>Consultant Service</Typography>
            <Typography variant="body2" display="block" mb={1}>Lead Generation</Typography>
            <Typography variant="body2" display="block" mb={1}>Branding Solutions</Typography>
            <Typography variant="body2" display="block" mb={1}>Digital Development</Typography>
            <Typography variant="body2" display="block" mb={1}>Web Development</Typography>
            <Typography variant="body2" display="block" mb={1}>Brand Advertising</Typography>
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
    </Box>
    </>
  );
};

export default Footer;