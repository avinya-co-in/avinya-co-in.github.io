import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
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
              <li className="flex items-center">
                <img src="/assets/icon/tick.svg" alt="Tick Icon" className="w-4 h-4 mr-2" />
                <strong>Proven Success:</strong>&nbsp;Expertly guiding international companies into the Indian market.
              </li>
              <li className="flex items-center">
                <img src="/assets/icon/tick.svg" alt="Tick Icon" className="w-4 h-4 mr-2" />
                <strong>In-Depth Knowledge:</strong>&nbsp;Deep understanding of India’s business landscape and culture.
              </li>
              <li className="flex items-center">
                <img src="/assets/icon/tick.svg" alt="Tick Icon" className="w-4 h-4 mr-2" />
                <strong>Tailored Solutions:</strong>&nbsp;Customized strategies to meet your unique business needs.
              </li>
            </ul>
            <p className="italic text-base md:text-xl">
              Join forces with Avinya for a successful and prosperous venture into India.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <img
              src="/assets/img/logo.png"
              className="w-full h-auto p-4"
              alt="Avinya Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;