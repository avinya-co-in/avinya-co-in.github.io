import React from "react";

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>
              Welcome to
              <b>Avinya</b>
            </h1>
            <br />
            <h1>
              <i>Your Gateway to the Indian Market!</i>
            </h1>
            <ul>
              <li>
                <i className="ri-check-line"></i> Expert assistance for
                international companies entering the Indian market
              </li>
              <li>
                <i className="ri-check-line"></i> Comprehensive market analysis
                and strategic planning
              </li>
              <li>
                <i className="ri-check-line"></i> Cultural expertise to ensure
                effective cross-border operations
              </li>
            </ul>
            <div className="mt-3">
              <a href="#contact" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
