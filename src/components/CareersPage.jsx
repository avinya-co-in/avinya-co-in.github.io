import { useContext } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { ThemeContext } from './ThemeContext';
import { themeColors } from './themeColors';

const jobOpenings = [
  {
    title: "Business Development Executive",
    Job: "Hybrid",
    description: "Seeking a proactive Business Development Executive to drive partnerships and expand market reach. Strong communication and negotiation skills are a must."
  },
  {
    title: "Sales Executive",
    Job: "Hybrid",
    description: "We are looking for a Sales Executive to identify leads, close deals, and manage client relationships effectively."
  },
  {
    title: "Product Manager",
    Job: "Onsite",
    description: "We need a product manager with experience in agile development and leading cross-functional teams."
  },
  {
    title: "Backend Developer",
    Job: "Hybrid",
    description: "We're looking for a skilled backend developer to join our team. Experience with Node.js and database management is preferred."
  },
  {
    title: "Frontend Developer",
    Job: "Hybrid",
    description: "We're looking for a frontend developer with a strong command of React and an eye for detail in user interfaces."
  },
  {
    title: "UI/UX Designer",
    Job: "Hybrid",
    description: "Looking for a creative UI/UX designer to create amazing user experiences. Proficiency in Figma or Adobe XD is required."
  }
];

export default function CareersPage() {
  const { mode } = useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  return (
    <Box id="career" sx={{ bgcolor: colors.background, scrollMarginTop: '100px', py: 12 }}> {/* Adjust scroll position */}
        <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight="bold" color={colors.primary}>
                Careers at Our Company
            </Typography>
            <Typography variant="body1" color={colors.text} mt={2}>
                We are always looking for talented individuals to join our team. Below are the current job openings:
            </Typography>
        </Box>

        {/* Job Openings Section */}
        <Grid container spacing={4}>
            {jobOpenings.map((job, index) => (
            <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: 300, bgcolor: colors.background,  transition: 'border 0.3s', border: '1px solid transparent', '&:hover': { borderColor: colors.primary } }}>
                    <CardContent>
                        <Typography variant="h5" color={colors.text} gutterBottom>
                        {job.title}
                        </Typography>
                        <Typography variant="subtitle1" color={colors.text} gutterBottom>
                        Job: {job.Job}
                        </Typography>
                        <Typography variant="body1" color={colors.text} paragraph>
                        {job.description}
                        </Typography>
                        <Button
                        variant="contained"
                        background={colors.buttonBackground}
                        color={colors.button}
                        href={`https://api.whatsapp.com/send/?phone=918980038802&text&type=phone_number&app_absent=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 2 }}
                        >
                        Apply Now {" "}<WhatsApp/>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
        </Container>
    </Box>
  );
}
