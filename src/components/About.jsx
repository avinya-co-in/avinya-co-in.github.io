import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
const About = () => {
  return (
    <>
      <Box id="about" sx={{ bgcolor: 'white', mt: 15}}>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center">
            <Box sx={{ flex: 3, textAlign: { xs: 'center', md: 'left' } }} mt = {{xs : 5, md : 0, lg: -19}}>
              <Typography variant="h4" fontWeight="bold" color="primary.main" mb={3}>
                About Avinya
              </Typography>
              <Typography variant="h6" fontWeight="600" mb={2}>
                Expand your horizons with Avinya - your trusted partner in conquering the vast potential of the Indian market
              </Typography>
              <Typography variant="body1" mb={3}>
                Avinya is dedicated to connecting global enterprises with the vibrant and dynamic Indian market.
                Our team comprises seasoned professionals with deep expertise in marketing, consulting, and cross-cultural
                communication. We are committed to ensuring your expansion into India is seamless and successful.
              </Typography>
              <List sx={{ mb: 3 }}>
                <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{ width: 16, height: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1">
                        <b>Proven Success:&nbsp;</b> Expertly guiding international companies into the Indian market.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{ width: 16, height: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1">
                        <b>In-Depth Knowledge:&nbsp;</b> Deep understanding of India's business landscape and culture.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemIcon>
                    <Box component="img" src="/assets/icon/tick.svg" sx={{ width: 16, height: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1">
                        <b>Tailored Solutions:&nbsp;</b> Customized strategies to meet your unique business needs.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
              <Typography variant="body1" fontStyle="italic">
                Join forces with Avinya for a successful and prosperous venture into India.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, mt: { xs: 4, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
              <Box
                component="img"
                src="/logo.png"
                sx={{ width: '100%', height: '100%' }}
                alt="Avinya Logo"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <section id="about" className="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                About Avinya
              </h2>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Expand your horizons with Avinya - your trusted partner in conquering the vast potential of the Indian market
              </h3>
              <p className="text-base md:text-lg mb-4">
                Avinya is dedicated to connecting global enterprises with the vibrant and dynamic Indian market.
                Our team comprises seasoned professionals with deep expertise in marketing, consulting, and cross-cultural
                communication. We are committed to ensuring your expansion into India is seamless and successful.
              </p>
              <ul className="text-base md:text-lg mb-4 space-y-2">
                <li className="sm:flex sm:items-center">
                  <div className="flex items-center">
                    <img src="/assets/icon/tick.svg" alt="Tick Icon" className="w-4 h-4 mr-2" />
                    <b>Proven Success:&nbsp;</b>
                  </div>
                  <p>Expertly guiding international companies into the Indian market.</p>
                </li>
                <li className="sm:flex sm:items-center">
                  <div className="flex items-center">
                    <img src="/assets/icon/tick.svg" alt="Tick Icon" className="w-4 h-4 mr-2" />
                    <b>In-Depth Knowledge:&nbsp;</b>
                  </div>
                  Deep understanding of India's business landscape and culture.
                </li>
                <li className="sm:flex sm:items-center">
                  <div className="flex items-center">
                    <img src="/assets/icon/tick.svg" alt="Tick Icon" className="w-4 h-4 mr-2" />
                    <b>Tailored Solutions:&nbsp;</b>
                  </div>
                  Customized strategies to meet your unique business needs.
                </li>
              </ul>
              <p className="italic text-base md:text-xl">
                Join forces with Avinya for a successful and prosperous venture into India.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
              <img
                src="/logo.png"
                className="w-full h-auto p-4"
                alt="Avinya Logo"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;