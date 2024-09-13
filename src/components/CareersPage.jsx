import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const jobOpenings = [
  {
    title: "Backend Developer",
    Job: "Hybrid",
    description: "We're looking for a skilled software engineer to join our team. Experience with React and Node.js is preferred."
  },
  {
    title: "Full Stack Engineer",
    Job: "Hybrid",
    description: "We're looking for a skilled software engineer to join our team. Experience with React and Node.js is preferred."
  },
  {
    title: "Frontend Developer",
    Job: "Hybrid",
    description: "We're looking for a skilled software engineer to join our team. Experience with React and Node.js is preferred."
  },
  {
    title: "Product Manager",
    Job: "Onsite",
    description: "We need a product manager with experience in agile development and leading cross-functional teams."
  },
  {
    title: "UI/UX Designer",
    Job: "Hybrid",
    description: "Looking for a creative UI/UX designer to create amazing user experiences. Proficiency in Figma or Adobe XD is required."
  }
];

export default function CareersPage() {
  return (
    <Box id="career" sx={{ my: 4, scrollMarginTop: '100px' }}> {/* Adjust scroll position */}
        <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight="bold" color="text.primary">
                Careers at Our Company
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={2}>
                We are always looking for talented individuals to join our team. Below are the current job openings:
            </Typography>
        </Box>

        {/* Job Openings Section */}
        <Grid container spacing={4}>
            {jobOpenings.map((job, index) => (
            <Grid item xs={12} md={4} key={index}>
                <Card style={{ height: 250 }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                        {job.title}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                        Job: {job.Job}
                        </Typography>
                        <Typography variant="body1" paragraph>
                        {job.description}
                        </Typography>
                        <Button
                        variant="contained"
                        color="primary"
                        href={`#apply-${job.title.toLowerCase().replace(/\s/g, '-')}`}
                        >
                        Apply Now
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
