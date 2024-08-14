import React from "react";

function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-white border hover:border-blue-700 p-6 rounded-lg shadow-lg">
              <span className="text-4xl font-bold text-blue-600">01</span>
              <h4 className="text-xl font-semibold mt-4">Market Entry Specialists</h4>
              <p className="text-gray-700 mt-2 h-20">
                Avinya specializes in guiding international B2B businesses for a successful entry into India's dynamic market.
              </p>
            </div>
          </div>

          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-white border hover:border-blue-700 p-6 rounded-lg shadow-lg">
              <span className="text-4xl font-bold text-blue-600">02</span>
              <h4 className="text-xl font-semibold mt-4">Tailored Strategies</h4>
              <p className="text-gray-700 mt-2 h-20">
                We customize solutions to match your unique goals, budget, and timeline, ensuring maximum impact.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-white border hover:border-blue-700 p-6 rounded-lg shadow-lg">
              <span className="text-4xl font-bold text-blue-600">03</span>
              <h4 className="text-xl font-semibold mt-4">Expertise in Indian Market</h4>
              <p className="text-gray-700 mt-2 h-20">
                Our team's in-depth understanding of the local business landscape and cultural intricacies ensures a smooth and rewarding transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;