import { useContext, useState } from 'react';
import { Box, Container, Typography, List, ListItem, Collapse, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeContext } from './ThemeContext';
import { themeColors } from './themeColors';

const faqData = [
  {
    question: "What services does Avinya Marketing Solution offer?",
    answer: "Avinya Marketing Solution specializes in assisting exporters by providing comprehensive lists of potential buyers in international markets. Our services include detailed contact information for key decision-makers, such as purchase managers, when available, helping you connect directly with the right people."
  },
  {
    question: "How does Avinya Marketing Solution help exporters save time and money?",
    answer: "Finding reliable buyers in international markets can be time-consuming and costly. Our targeted research and customized buyer lists streamline this process, enabling you to focus on selling your products rather than searching for buyers. By providing direct contact details of key decision-makers, we further reduce the effort and resources required to make valuable connections."
  },
  {
    question: "Why is finding buyers in international markets so challenging?",
    answer: "International markets involve diverse regulations, cultural differences, and varying market conditions. Identifying and connecting with reliable buyers requires extensive research, market knowledge, and access to accurate, up-to-date information, which can be difficult for exporters to manage independently."
  },
  {
    question: "How do you help exporters find buyers in challenging markets?",
    answer: "We conduct thorough, targeted research to identify potential buyers in specific international markets. Our team uses a combination of data sources, industry expertise, and market trends to create accurate and relevant buyer lists tailored to your product and target regions. When possible, we also include contact details of key individuals like purchase managers to facilitate direct communication."
  },
  {
    question: "What industries do you support in finding international buyers?",
    answer: "We work with exporters across a wide range of industries, including agriculture, manufacturing, textiles, and more. If your industry is highly specialized, we can customize our research to locate the most relevant buyers in your desired international markets."
  },
  {
    question: "Can your services be tailored to specific countries or regions?",
    answer: "Yes, our services are fully customizable. Whether you're looking to enter a specific country or a broader region, we can provide buyer lists and marketing insights that align with your goals and market entry strategy."
  },
  {
    question: "How frequently are your buyer lists updated?",
    answer: "We regularly update our buyer lists to reflect the latest market conditions and buyer information. This ensures that you are always working with the most current and relevant data, giving you a competitive edge in the international market."
  },
  {
    question: "What sets Avinya Marketing Solution apart from other companies?",
    answer: "Our deep understanding of international trade, combined with our focus on providing high-quality, customized buyer lists, makes us a valuable partner for exporters. We are dedicated to helping you overcome the challenges of finding buyers in foreign markets, ensuring your success in global business."
  },
  {
    question: "How can I start working with Avinya Marketing Solution?",
    answer: "To get started, simply contact us through our website or give us a call. We’ll discuss your specific needs and develop a customized plan to connect you with the right buyers in the international markets you’re targeting."
  },
  {
    question: "What is the expected delivery time for a customized buyer list?",
    answer: "The delivery time depends on the complexity of your request and the specific market you're targeting. However, we aim to provide your tailored buyer list within 7-14 business days, ensuring you have the information you need to move forward quickly."
  },
  {
    question: "How can I trust the accuracy and reliability of your buyer lists?",
    answer: "We employ a rigorous research process, cross-referencing multiple data sources to ensure accuracy and reliability. Our commitment to quality means you can trust that the buyer lists we provide are dependable and tailored to your specific export needs."
  }
];


const FAQs = () => {
  const { mode } = useContext(ThemeContext);  // Use mode from ThemeContext
  const colors = themeColors[mode];  // Get colors based on the current mode
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Box id="faq" sx={{ bgcolor: colors.background, display: 'flex', alignItems: 'center'}}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h4" fontWeight="bold" color={colors.primary}>
              FAQs
            </Typography>
          </Box>

          {/* FAQ List */}
          <List sx={{ gap: 2 }} style={{marginTop:'-35px'}}>
            {faqData.map((item, index) => (
              <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'stretch', mb: 2, px: 0 }} >
                <Paper
                  elevation={3}
                  sx={{ 
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                    cursor: 'pointer', py: 3, px: 4, 
                    transition: 'border 0.3s', border: '1px solid transparent',
                    bgcolor:colors.cardColor, 
                    '&:hover': { borderColor: 'primary.main' }, borderRadius: 2
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <Typography color={colors.text} style = {{fontSize:'15px'}}>
                    {item.question}
                  </Typography>
                  <IconButton>
                    <ExpandMoreIcon sx={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color:colors.primary }} />
                  </IconButton>
                </Paper>

                <Collapse in={activeIndex === index}>
                  <Box p={4} mt={-1}>
                    <Typography color={colors.text} style = {{fontSize:'13px'}}>
                      {item.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </>
    // <section id="faq" className="bg-white flex items-center">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-8">
    //       <h2 className="text-3xl font-bold text-gray-900">FAQs</h2>
    //     </div>

    //     <ul className="space-y-4">
    //       {faqData.map((item, index) => (
    //         <li key={index}>
    //           <div
    //             className="flex justify-between items-center cursor-pointer py-4 px-6 border hover:border-blue-700 rounded-lg shadow-md"
    //             onClick={() => toggleFAQ(index)}
    //           >
    //             <span className="text-lg sm:text-2xl text-gray-800">{item.question}</span>
    //             <i className={`text-gray-600 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
    //               <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //                 <path d="M12 14.121l-5.657-5.657 1.414-1.414 4.243 4.243 4.243-4.243 1.414 1.414z" />
    //               </svg>
    //             </i>
    //           </div>
    //           {activeIndex === index && (
    //             <div className="p-6 text-gray-700 text-base sm:text-xl">
    //               {item.answer}
    //             </div>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </section>
  );
};

export default FAQs;