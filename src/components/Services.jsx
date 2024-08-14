import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <h4 className="text-lg text-gray-700 mt-2">
            Unlock the potential of the Indian market with <br />
            <b>Avinya</b>'s comprehensive suite of B2B marketing and consulting services.
          </h4>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-5/12 flex justify-center">
            <img src="assets/img/services.svg" className="max-w-full h-auto" alt="Services Illustration" />
          </div>
          <div className="xl:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600">Face-to-Face Meeting</h4>
                <p className="text-gray-700 mt-2">
                  We facilitate face-to-face meetings with your prospects, establishing a personal touch that enhances trust and credibility.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-orange-500">Cold Call Services</h4>
                <p className="text-gray-700 mt-2">
                  Our expert team employs strategic cold calling and email campaigns to reach out to your target audience, ensuring effective communication and relationship-building.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-pink-500">White Label Product</h4>
                <p className="text-gray-700 mt-2">
                  Avinya helps in marketing your white label product or finding a white label product for your business.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-teal-500">Branding Solutions</h4>
                <p className="text-gray-700 mt-2">
                  We craft a compelling brand identity that resonates with the Indian audience, setting the stage for long-term success.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;