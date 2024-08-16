const Contact = () => {
  return (
    <section id="contact" className="my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600 text-lg">Expand your business horizons with Avinya's unparalleled expertise! Contact us now to embark on your journey to success in the Indian market.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-2/4 mb-6 md:mb-0">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Our Address</h3>
              <p className="mt-2 text-gray-600">Avinya, Westgate, 4, SG Hwy Service Rd, Ahmedabad, Gujarat, 380015</p>
            </div>
          </div>
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="mt-2 text-gray-600">
                <a href="mailto:contact@avinya.co.in" className="text-blue-500 hover:underline">contact@avinya.co.in</a>
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="mt-2 text-gray-600">+91 8980038802</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;