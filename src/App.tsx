import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import AccommodationTypesSection from './components/AccommodationTypesSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <AccommodationTypesSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;