function Hero() {
  return (
    <section id="hero" className="bg-white py-8 h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 pt-4 lg:pt-0 flex flex-col justify-center lg:text-left">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Welcome to <span className="font-extrabold">Avinya</span>
            </h1>
            <h1 className="text-xl lg:text-4xl italic mt-2">
              Your Gateway to the Indian Market!
            </h1>
            <ul className="mt-4 space-y-2 text-sm lg:text-lg">
              <li className="flex items-center">
                <img src="/assets/icon/tick.svg" className="w-4 h-4 mr-2" />
                Expert assistance for companies wishing to expand business&nbsp;<div className="font-black">Globally</div>
              </li>
              <li className="flex items-center">
                <img src="/assets/icon/tick.svg" className="w-4 h-4 mr-2" />
                Comprehensive market analysis and strategic planning
              </li>
              <li className="flex items-center">
                <img src="/assets/icon/tick.svg" className="w-4 h-4 mr-2" />
                Cultural expertise to ensure effective cross-border operations
              </li>
            </ul>
            <div className="mt-6">
              <a href="https://anvika.vercel.app/dashboard" className="bg-blue-600 text-white text-lg py-3 px-5 rounded-full hover:bg-blue-700 transition-colors duration-200 ml-4">Get Started</a>
            </div>
          </div>
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img src="/assets/img/hero-img.png" className="w-full h-auto" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
