import TrustBar from "@/components/landing/TrustBar";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PartnerLogos from "@/components/landing/PartnerLogos";
import DestinationsGrid from "@/components/landing/DestinationsGrid";
import WhyChoose from "@/components/landing/WhyChoose";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import AppDownload from "@/components/landing/AppDownload";
import ImageGallery from "@/components/landing/ImageGallery";
import CityPassFamily from "@/components/landing/CityPassFamily";
import HelpSection from "@/components/landing/HelpSection";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TrustBar />
    <Navbar />
    <HeroSection />
    <PartnerLogos />
    <DestinationsGrid />
    <WhyChoose />
    <HowItWorks />
    <Testimonials />
    <AppDownload />
    <ImageGallery />
    <HelpSection />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
