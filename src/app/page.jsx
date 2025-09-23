import HeroSection from "./../Components/HomePage/HeroSection/HeroSection";
import AboutUs from "./../Components/HomePage/AboutUs/AboutUs";
import Services from "./../Components/HomePage/Services/Services";
import WhyUs from "./../Components/HomePage/WhyUs/WhyUs";
import ContactUs from "./../Components/HomePage/ContactUs/ContactUs";
import Reviews from "./../Components/HomePage/Reviews/Reviews";
import HomeCounter from "./../Components/HomePage/HomeCounter/HomeCounter";
import HomePartners from "./../Components/HomePage/HomePartners/HomePartners";
import HomeMap from "./../Components/HomeMap/HomeMap";
import HomeSeoContents from "./../Components/HomePage/HomeSeoContents/HomeSeoContents";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutUs />
      <WhyUs />
      <HomeCounter />
      <ContactUs />
      <HomePartners />
      <Reviews />
      <HomeSeoContents />
      <HomeMap />
    </div>
  );
}
