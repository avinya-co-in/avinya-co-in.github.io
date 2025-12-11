import {useContext, useState} from 'react';
import {Box, Container, Typography, List, ListItem, Collapse, IconButton, Paper} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ThemeContext} from './ThemeContext';
import {themeColors} from './themeColors';

const faqData = [
  {
    question: "What is import-export trade data and how can it help my business?",
    answer: "Import-export trade data includes detailed shipment records, customs declarations, buyer-supplier information, and verified contact details from global trade transactions. This data helps you identify potential customers, analyze market trends, understand competitor activities, discover new suppliers, and make data-driven business decisions. With Avinya's verified trade data, you can access real transaction records to find genuine business opportunities worldwide."
  },
  {
    question: "How do I get free sample import-export data from Avinya?",
    answer: "Getting free sample data is simple! Just email us at data@avinya.co.in with details about the industry or product category you're interested in. We'll send you 5 high-quality verified sample records absolutely free, including shipment details, contact information, and trade statistics. This allows you to evaluate the quality and relevance of our data before making any commitment."
  },
  {
    question: "What types of import-export data does Avinya provide?",
    answer: "Avinya provides comprehensive trade intelligence including: Import Data (buyer information, shipment records, port details), Export Data (supplier details, destination countries, product specifications), Customs Data (official declarations, HS codes, trade values), Shipment Records (bill of lading, container details, freight information), and Verified B2B Contact Details (decision-makers, purchase managers, company profiles). All data is verified and regularly updated for accuracy."
  },
  {
    question: "Which countries and industries are covered in your trade data?",
    answer: "Our import-export data covers major trading nations worldwide including USA, China, India, EU countries, Southeast Asia, Middle East, and more. We provide data across all industries including textiles, electronics, machinery, chemicals, agriculture, automotive, pharmaceuticals, consumer goods, and specialized sectors. If you need data from a specific country or niche industry, email us at data@avinya.co.in and we'll customize a solution for you."
  },
  {
    question: "How accurate and up-to-date is Avinya's import-export data?",
    answer: "We maintain the highest standards of data accuracy through rigorous verification processes. Our data is sourced from official customs authorities, port records, and verified trade databases. We update our databases regularly (monthly or quarterly depending on the source) to ensure you have access to the latest trade information. Each record is cross-verified for authenticity, making our data 100% reliable for business decisions."
  },
  {
    question: "What services does Avinya offer besides import-export data?",
    answer: "Beyond trade data, Avinya offers comprehensive B2B marketing and consulting services including: Lead Generation (targeted buyer-supplier lists with verified contacts), Market Research & Analysis (industry trends, competitor intelligence), Business Consulting (market entry strategies, expansion planning), Digital Development (website development, social media branding), and Branding Solutions (brand identity, market positioning). We're your complete partner for global business growth."
  },
  {
    question: "How can Avinya help me find international buyers and suppliers?",
    answer: "We use advanced trade intelligence and data analytics to identify active buyers and suppliers in your target markets. Our process includes analyzing actual shipment records to find companies actively trading in your product category, providing verified contact details of decision-makers, offering market insights and competitor analysis, and creating customized buyer-supplier lists tailored to your specific requirements. This data-driven approach ensures you connect with genuine, active trading partners."
  },
  {
    question: "What information is included in Avinya's verified contact details?",
    answer: "Our verified B2B contact details include: Company name and registration details, Complete address and location information, Direct phone numbers and email addresses, Key decision-maker names and designations (purchase managers, procurement heads, CEOs), Company website and social media profiles, Business activity and product categories, and Trade history and transaction volumes. This comprehensive information helps you reach the right person at the right company."
  },
  {
    question: "How quickly can I receive import-export data after requesting?",
    answer: "For free samples, we typically respond within 24-48 hours via email at data@avinya.co.in. For customized data requests, delivery time depends on the scope and complexity: Standard reports (specific product/country) take 3-5 business days, Comprehensive market analysis takes 7-10 business days, and Large-scale custom databases take 10-14 business days. We prioritize quality and accuracy while ensuring timely delivery to meet your business needs."
  },
  {
    question: "Is the import-export data legally obtained and safe to use?",
    answer: "Absolutely! All our import-export data is legally sourced from official public records, customs authorities, and authorized trade databases. We comply with all international data protection regulations and privacy laws. The data we provide is publicly available trade information that businesses worldwide use for market research, lead generation, and business intelligence. You can confidently use our data for legitimate business purposes without any legal concerns."
  },
  {
    question: "How much does Avinya's import-export data service cost?",
    answer: "Our pricing is flexible and customized based on your specific requirements such as countries covered, industries, data depth, and frequency of updates. We offer various packages from basic reports to comprehensive subscriptions. To get started, email us at data@avinya.co.in with your requirements and receive 5 free sample records. We'll then provide a customized quote that fits your budget and business needs. Our goal is to deliver maximum value at competitive prices."
  },
  {
    question: "Can I get import-export data for competitor analysis?",
    answer: "Yes! Our trade data is perfect for competitive intelligence. You can discover who your competitors are buying from or selling to, analyze their shipment volumes and frequencies, identify their key markets and customers, understand their product mix and pricing strategies, and spot market opportunities they might be missing. This intelligence helps you stay ahead in the market and make strategic business decisions. Contact us at data@avinya.co.in to get competitor-specific trade data."
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
              Everything you need to know about our import-export data and services
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
              Email us at <a href="mailto:data@avinya.co.in" style={{color: colors.primary, fontWeight: 'bold', textDecoration: 'none'}}>data@avinya.co.in</a> and get 5 free sample data records!
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQs;
