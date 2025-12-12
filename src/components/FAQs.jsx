import {useContext, useState} from 'react';
import {Box, Container, Typography, List, ListItem, Collapse, IconButton, Paper} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ThemeContext} from './ThemeContext';
import {themeColors} from './themeColors';

const faqData = [
  {
    question: "What supplier services does Avinya provide?",
    answer: "Avinya offers two main free services: 1) Find Best Indian Suppliers - Submit your product name or HS code and we'll find the best Indian suppliers for you. 2) Verify Your Indian Supplier - Provide supplier details and we'll verify their authenticity, physical address, and business legitimacy. Both services are completely free with no limits and we respond within 24 hours!"
  },
  {
    question: "How do I find Indian suppliers through Avinya?",
    answer: "Finding suppliers is simple! Just fill out our 'Find Supplier' form at https://forms.gle/acUG3zBhicB327BcA with your product name or HS code, add any additional specifications (type, size, quality, packaging, certifications), and provide your contact details. We'll research and send you a list of verified Indian suppliers within 24 hours - completely free!"
  },
  {
    question: "How can I verify if an Indian supplier is legitimate?",
    answer: "Use our free 'Verify Supplier' service at https://forms.gle/ydhA6rwqsQDDig2D8. Simply provide the supplier's company name, website, WhatsApp/contact number, and any specific verification requests (like physical address verification). Our team will conduct thorough verification and provide you with a detailed report within 24 hours - absolutely free of charge!"
  },
  {
    question: "Is Avinya's supplier service really free? Are there any hidden charges?",
    answer: "Yes, our supplier finding and verification services are 100% FREE with absolutely no hidden charges, no subscription fees, and no limits on the number of requests. We believe in helping businesses connect with reliable Indian suppliers without any financial barriers. You can submit as many requests as you need - all completely free!"
  },
  {
    question: "How quickly will I receive supplier information or verification results?",
    answer: "We pride ourselves on fast turnaround times! For both 'Find Supplier' and 'Verify Supplier' services, we complete your query within 24 hours. You'll receive detailed information via email or WhatsApp based on your preferred contact method. Our team works diligently to ensure you get accurate, verified information quickly."
  },
  {
    question: "What information do you provide when finding suppliers?",
    answer: "When you use our 'Find Supplier' service, we provide: Company names and contact details of verified Indian suppliers, Product specifications and capabilities, Manufacturing capacity and certifications, Contact information including email, phone, and WhatsApp, Company websites and business profiles, and Pricing guidance when available. All information is verified and up-to-date."
  },
  {
    question: "What does the supplier verification process include?",
    answer: "Our comprehensive verification includes: Business registration and legal status verification, Physical address confirmation and location verification, Contact number and email validation, Company reputation and track record check, Manufacturing capabilities assessment, Export experience verification, and Any specific checks you request (like certifications, quality standards, etc.). You'll receive a detailed verification report."
  },
  {
    question: "What industries and products do you cover?",
    answer: "We cover all industries and products manufactured in India including: Textiles and garments, Electronics and machinery, Chemicals and pharmaceuticals, Agriculture and food products, Automotive parts and accessories, Handicrafts and home decor, IT and software services, and many more. If you have a specific product or niche requirement, just submit your request and we'll find the right suppliers for you!"
  },
  {
    question: "Can I request multiple supplier searches or verifications?",
    answer: "Absolutely! There are no limits on the number of requests you can submit. Whether you need to find suppliers for multiple products or verify several suppliers, feel free to submit as many requests as needed. Each request is processed individually with the same care and attention, and all are completely free!"
  },
  {
    question: "What other services does Avinya offer besides supplier services?",
    answer: "Beyond our free supplier finding and verification services, Avinya offers comprehensive B2B marketing and consulting services including: Lead Generation (targeted buyer-supplier lists), Market Research & Analysis (industry trends, competitor intelligence), Business Consulting (market entry strategies, expansion planning), Digital Development (website development, social media branding), and Branding Solutions. Contact us to learn more!"
  },
  {
    question: "How do I contact Avinya for support or questions?",
    answer: "You can reach us at data@avinya.co.in for any questions, support, or additional services. We're here to help you succeed in connecting with Indian suppliers and growing your business. Our team typically responds to emails within 24 hours. You can also submit your queries through our Google Forms for supplier finding and verification."
  },
  {
    question: "Why should I trust Avinya for supplier services?",
    answer: "Avinya has extensive experience in the Indian B2B market with deep expertise in supplier sourcing and verification. Our team comprises seasoned professionals who understand both international business needs and the Indian market landscape. We conduct thorough verification processes, maintain high standards of accuracy, and have helped numerous businesses successfully connect with reliable Indian suppliers. Plus, our service is free, so you have nothing to lose!"
  }
];


const FAQs = () => {
  const {mode} = useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Box id="faq" sx={{bgcolor: colors.background, display: 'flex', alignItems: 'center', py: 8}}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" color={colors.primary}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color={colors.text} mt={2}>
              Everything you need to know about our free supplier finding and verification services
            </Typography>
          </Box>

          {/* FAQ List */}
          <List sx={{gap: 2}}>
            {faqData.map((item, index) => (
              <ListItem key={index} sx={{flexDirection: 'column', alignItems: 'stretch', mb: 2, px: 0}} >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer', py: 3, px: 4,
                    transition: 'border 0.3s', border: '1px solid transparent',
                    bgcolor: colors.cardColor,
                    '&:hover': {borderColor: 'primary.main'}, borderRadius: 2
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <Typography color={colors.text} style={{fontSize: '17px', fontWeight: '500'}}>
                    {item.question}
                  </Typography>
                  <IconButton>
                    <ExpandMoreIcon sx={{transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: colors.primary}} />
                  </IconButton>
                </Paper>

                <Collapse in={activeIndex === index}>
                  <Box p={4} mt={-1}>
                    <Typography color={colors.text} style={{fontSize: '15px', lineHeight: '1.7'}}>
                      {item.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </ListItem>
            ))}
          </List>

          {/* CTA at bottom */}
          <Box textAlign="center" mt={6} p={4} sx={{bgcolor: colors.primary + '10', borderRadius: 3}}>
            <Typography variant="h6" fontWeight="600" color={colors.heading} mb={2}>
              Still have questions?
            </Typography>
            <Typography variant="body1" color={colors.text} mb={3}>
              Email us at <a href="mailto:data@avinya.co.in" style={{color: colors.primary, fontWeight: 'bold', textDecoration: 'none'}}>data@avinya.co.in</a> or submit your free supplier request today!
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQs;
