// Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ImportExportData from "../components/ImportExportData";
// import Features from "../components/Features";
import Services from "../components/Services";
// import WhyUs from "../components/WhyUs";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import CareersPage from "../components/CareersPage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <ImportExportData />
        {/* <WhyUs /> */}
        <Services />
        <FAQs />
        <Contact />
        <CareersPage />
      </main>
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Home;
