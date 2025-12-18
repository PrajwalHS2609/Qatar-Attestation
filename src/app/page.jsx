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
import HomeContent from "./../Components/HomePage/HomeContent";
import HomeHeaderContent from "./../Components/HomePage/HomeHeaderContent";
import HomeFaq from "./../Components/HomePage/HomeFaq/HomeFaq";

export const metadata = {
  title:
    "Qatar Attestation in Bangalore at Best Price – 1Hr Documents Collection",
  description:
    "Qatar Attestation in Bangalore at Best Price. If you are planning to work, study, start a business, or move your family to the Qatar. Call Now! ",
  alternates: {
    canonical: "https://qatarattestationbangalore.com/",
  },

  keywords: [
    "Qatar attestation Bangalore",
    "Qatar certificate attestation",
    "Qatar embassy attestation Bangalore",
    "Qatar document attestation",
    "Qatar attestation services",
    "Qatar MOFA attestation",
  ],
};
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HomeHeaderContent />
      <Services />
      <AboutUs />
      <WhyUs />
      <HomeCounter />
      <ContactUs />
      <HomePartners />
      <Reviews />
      <HomeSeoContents />
      <HomeFaq />
      <HomeMap />
      <HomeContent />
    </div>
  );
}
