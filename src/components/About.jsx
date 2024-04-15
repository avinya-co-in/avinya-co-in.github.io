import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6">
            <h2>About Avinya</h2>
            <h3>
              Expand your horizons with Avinya - your trusted partner in
              conquering the vast potential of the Indian market
            </h3>
            <p>
              Avinya can help you explore new opportunities in India. We`re here
              to support you as you take on the Indian market. Our goal at
              Avinya is to connect businesses from around the world with India.
              Our team is made up of experts in marketing, consulting, and
              understanding different cultures. We`re focused on making sure
              your plans to expand in India go really well.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                We`re really good at helping international companies start in
                India.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                We know a lot about how business works in India and the culture
                there.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                We can change our approach to fit what you need and want.
              </li>
            </ul>
            <p className="fst-italic">
              Partner with us at Avinya for a successful venture into the
              diverse and thriving Indian market. Our expertise and dedication
              will drive your growth and prosperity.
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <img src="assets/img/logo.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
