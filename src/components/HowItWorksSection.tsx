import BookRelaxIcon from './icons/BookRelaxIcon';
import ChecklistIcon from './icons/ChecklistIcon';
import SaveMoreIcon from './icons/SaveMoreIcon';

const steps = [
  {
    icon: BookRelaxIcon,
    title: "Dream & Discover",
    description: "Share your travel dreams with our expert consultants who craft personalized itineraries tailored to your desires"
  },
  {
    icon: ChecklistIcon,
    title: "Plan & Prepare", 
    description: "We handle every detail from luxury accommodations to exclusive experiences, ensuring nothing is left to chance"
  },
  {
    icon: SaveMoreIcon,
    title: "Travel & Create Memories",
    description: "Embark on your perfectly orchestrated journey with 24/7 support and exclusive VIP access worldwide"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-xl text-gray-900">How Dreamzz Works</h2>
          <p className="text-body text-gray-500 max-w-2xl mx-auto">
             Your journey from dream to reality in three simple steps with our luxury travel experts
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-8">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-60 h-56 flex items-center justify-center">
                  <step.icon width={240} height={220} color="#374151" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-5 max-w-xs mx-auto">
                <h3 className="heading-md text-gray-900">{step.title}</h3>
                <p className="text-small text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;