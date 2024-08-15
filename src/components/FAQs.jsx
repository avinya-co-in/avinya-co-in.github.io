import React, { useState } from 'react';

const faqData = [
  {
    question: "What is Avinya, and what services do you offer?",
    answer: "Avinya is a marketing and consulting company specializing in assisting B2B businesses looking to expand into India. We offer a wide range of services, including market entry strategy, lead generation, cold calling, cold emailing, in-person visits, social media advertising, branding, website development, and more."
  },
  {
    question: "Why should I choose Avinya for my market expansion into India?",
    answer: "Avinya brings a wealth of experience, expertise, and a deep understanding of the Indian market. Our result-oriented approach, personalized strategies, and flexible pricing model ensure you get the best value for your investment."
  },
  {
    question: "How do you customize your services to suit my business needs?",
    answer: "We take the time to understand your specific business goals, industry, and target audience. Based on this information, we develop tailored strategies that align with your unique requirements and objectives."
  },
  {
    question: "What sets Avinya apart from other marketing and consulting firms?",
    answer: "Avinya stands out due to our deep cross-cultural expertise, comprehensive market research, and hands-on approach. We take pride in being your reliable partner, committed to your success every step of the way."
  },
  {
    question: "How do you ensure the quality of your lead generation services?",
    answer: "Our lead generation services are based on a data-driven approach, utilizing advanced tools and methodologies. We target high-potential prospects and employ personalized communication strategies to ensure effective lead conversion."
  },
  {
    question: "How do you handle cultural differences in business interactions?",
    answer: "Our team undergoes cultural sensitivity training, enabling us to navigate diverse business cultures with respect and professionalism. We bridge the gap, ensuring smooth and successful interactions with Indian counterparts."
  },
  {
    question: "What type of pricing model do you follow?",
    answer: "Avinya follows a flexible pricing model tailored to your specific needs and budget. Our aim is to provide cost-effective solutions without compromising on the quality of services."
  },
  {
    question: "How can I get started with Avinya's services?",
    answer: "Getting started is easy! Simply reach out to us through our website's contact form, and one of our representatives will get in touch with you promptly. We will schedule a consultation to understand your requirements and propose a suitable action plan for your market expansion in India."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">FAQs</h2>
        </div>

        <ul className="space-y-4">
          {faqData.map((item, index) => (
            <li key={index}>
              <div
                className="flex justify-between items-center cursor-pointer py-4 px-6 border hover:border-blue-700 rounded-lg shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg sm:text-2xl text-gray-800">{item.question}</span>
                <i className={`text-gray-600 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 14.121l-5.657-5.657 1.414-1.414 4.243 4.243 4.243-4.243 1.414 1.414z" />
                  </svg>
                </i>
              </div>
              {activeIndex === index && (
                <div className="p-6 text-gray-700 text-base sm:text-xl">
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs;