import HeroSection from "./../Components/HomePage/HeroSection/HeroSection";
import AboutUs from "./../Components/HomePage/AboutUs/AboutUs";
import Services from './../Components/HomePage/Services/Services';
import WhyUs from './../Components/HomePage/WhyUs/WhyUs';
import ContactUs from './../Components/HomePage/ContactUs/ContactUs';
import Reviews from './../Components/HomePage/Reviews/Reviews';
import Footer from './../Components/Footer/Footer';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services/>
      <AboutUs />
      <WhyUs/>
      <ContactUs/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
