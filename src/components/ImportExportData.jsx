import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import DatasetIcon from '@mui/icons-material/Dataset';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeColors } from "./themeColors";

const ImportExportData = () => {
  const { mode } = useContext(ThemeContext);
  const colors = themeColors[mode];
  
  return (
    <Box id="import-export-data" sx={{ py: 12, bgcolor: colors.background }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" color={colors.primary}>
            Import-Export Trade Data & Intelligence
          </Typography>
          <Typography style={{fontSize:'17px'}} color={colors.text} mt={2}>
            Access high-quality verified trade data and contact details from any industry worldwide
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Features */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="600" color={colors.heading} mb={3}>
              Get Verified Import-Export Data with Avinya
            </Typography>
            <Typography variant="body1" color={colors.text} mb={3}>
              Our software provides comprehensive access to verified import-export industry data, 
              including shipment records, customs data, buyer-supplier information, and verified 
              contact details to help you make informed business decisions.
            </Typography>
            
            <Stack spacing={2} mb={4}>
              <Paper 
                elevation={2}
                sx={{ p: 2, borderRadius: 2, bgcolor: colors.cardColor, border: `1px solid ${colors.primary}20` }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <VerifiedIcon sx={{ color: colors.primary, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6" fontWeight="600" color={colors.heading}>
                      Verified Trade Data
                    </Typography>
                    <Typography variant="body2" color={colors.text}>
                      100% verified and authentic import-export records
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              <Paper 
                elevation={2}
                sx={{ p: 2, borderRadius: 2, bgcolor: colors.cardColor, border: `1px solid ${colors.primary}20` }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <PublicIcon sx={{ color: colors.primary, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6" fontWeight="600" color={colors.heading}>
                      Global Coverage
                    </Typography>
                    <Typography variant="body2" color={colors.text}>
                      Access trade data from countries worldwide
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              <Paper 
                elevation={2}
                sx={{ p: 2, borderRadius: 2, bgcolor: colors.cardColor, border: `1px solid ${colors.primary}20` }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <TrendingUpIcon sx={{ color: colors.primary, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h6" fontWeight="600" color={colors.heading}>
                      Market Intelligence
                    </Typography>
                    <Typography variant="body2" color={colors.text}>
                      Detailed insights for strategic business decisions
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Right Side - CTA */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={6}
              sx={{ 
                p: 5, 
                borderRadius: 3, 
                bgcolor: colors.cardColor,
                border: `2px solid ${colors.primary}`,
                textAlign: 'center'
              }}
            >
              <DatasetIcon sx={{ color: colors.primary, fontSize: 64, mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" color={colors.heading} mb={2}>
                Get 5 FREE Sample Data
              </Typography>
              <Typography variant="body1" color={colors.text} mb={3}>
                Simply email us what industry data you need, and we'll send you 
                <strong> 5 high-quality verified sample records</strong> absolutely free!
              </Typography>
              
              <Box 
                sx={{ 
                  bgcolor: colors.primary + '15', 
                  p: 3, 
                  borderRadius: 2, 
                  mb: 3 
                }}
              >
                <Typography variant="body2" color={colors.text} mb={2}>
                  What you'll get:
                </Typography>
                <Stack spacing={1} alignItems="flex-start" sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" color={colors.text}>
                    ✓ Verified buyer/supplier contact details
                  </Typography>
                  <Typography variant="body2" color={colors.text}>
                    ✓ Shipment records and customs data
                  </Typography>
                  <Typography variant="body2" color={colors.text}>
                    ✓ Product descriptions and HS codes
                  </Typography>
                  <Typography variant="body2" color={colors.text}>
                    ✓ Trade volumes and pricing insights
                  </Typography>
                </Stack>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                href="mailto:data@avinya.co.in?subject=Request for Import-Export Data Sample&body=Hello Avinya Team,%0D%0A%0D%0AI would like to request 5 free sample data for the following industry:%0D%0A%0D%0A[Please specify your industry/product]%0D%0A%0D%0AThank you!"
                startIcon={<EmailIcon />}
                sx={{
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                  }
                }}
              >
                Email Us at data@avinya.co.in
              </Button>
              
              <Typography variant="caption" color={colors.text} display="block" mt={2}>
                No credit card required • Instant response • 100% Free
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Bottom Section - Data Types */}
        <Box mt={8}>
          <Typography variant="h5" fontWeight="600" color={colors.heading} textAlign="center" mb={4}>
            Available Data Types
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  bgcolor: colors.cardColor,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' }
                }}
              >
                <Typography variant="h6" fontWeight="600" color={colors.primary} mb={1}>
                  Import Data
                </Typography>
                <Typography variant="body2" color={colors.text}>
                  Detailed import shipment records with buyer information
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  bgcolor: colors.cardColor,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' }
                }}
              >
                <Typography variant="h6" fontWeight="600" color={colors.primary} mb={1}>
                  Export Data
                </Typography>
                <Typography variant="body2" color={colors.text}>
                  Export records with supplier and destination details
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  bgcolor: colors.cardColor,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' }
                }}
              >
                <Typography variant="h6" fontWeight="600" color={colors.primary} mb={1}>
                  Customs Data
                </Typography>
                <Typography variant="body2" color={colors.text}>
                  Official customs declarations and trade statistics
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  bgcolor: colors.cardColor,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' }
                }}
              >
                <Typography variant="h6" fontWeight="600" color={colors.primary} mb={1}>
                  Contact Details
                </Typography>
                <Typography variant="body2" color={colors.text}>
                  Verified B2B contact information for decision makers
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ImportExportData;
