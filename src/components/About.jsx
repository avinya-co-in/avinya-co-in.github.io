import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="">
        <div className="flex flex-row">
          <div className="size-5/6 self-center text-start">
            <h2 className="mb-6 text-3xl font-bold text-purple-950">
              About Avinya
            </h2>
            <h3 className="mb-2 text-xl font-semibold">
              Expand your horizons with Avinya - your trusted partner in
              conquering the vast potential of the Indian market
            </h3>
            <p className="mb-2 text-lg">
              Avinya can help you explore new opportunities in India. We&apos;re
              here to support you as you take on the Indian market. Our goal at
              Avinya is to connect businesses from around the world with India.
              Our team is made up of experts in marketing, consulting, and
              understanding different cultures. Wecre focused on making
              sure your plans to expand in India go really well.
            </p>
            <ul className="mb-2 flex flex-col gap-1.5 text-lg">
              <li>
                <i className="ri-check-double-line"></i>
                We&apos;re really good at helping international companies start in
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
            <p className="fst-italic text-lg">
              Partner with us at Avinya for a successful venture into the
              diverse and thriving Indian market. Our expertise and dedication
              will drive your growth and prosperity.
            </p>
          </div>
          <div className="self-center bg-blue-300 max-h-max">
            <img
              src="https://avinya.co.in/assets/img/logo.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
