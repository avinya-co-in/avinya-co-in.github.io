const Services = () => {
  return (
    <section id="services" className="py-12 bg-white flex items-center">
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
            <img src="/services.png" className="max-w-full h-auto" alt="Services Illustration" />
          </div>
          <div className="xl:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-blue-600">Lead Generation</h4>
                <p className="text-gray-700 mt-2">
                  We facilitate High Quality Lead gathering for improvement of your business.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-orange-500">Digital Development</h4>
                <p className="text-gray-700 mt-2">
                  Our team expertise in developing digital solutions like Website development, social media branding and other custom service.
                </p>
              </div>

              <div className="flex flex-col items-center text-center bg-white border hover:border-blue-700 border-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-pink-500">Consultanton Service</h4>
                <p className="text-gray-700 mt-2">
                  Avinya team helps in improving your business by using our expertise to identify the problems in your business.
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