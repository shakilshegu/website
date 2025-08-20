// import AccommodationTypesSection from "../components/AccommodationTypesSection";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import VideoSection from "../components/VideoSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <HighlightsSection />
        <BenefitsSection />
        <HowItWorksSection />
        {/* <AccommodationTypesSection /> */}
        <VideoSection />
      </main>
    </div>
  );
};

export default LandingPage;
