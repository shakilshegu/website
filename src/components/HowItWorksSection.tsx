import BookRelaxIcon from './icons/BookRelaxIcon';
import ChecklistIcon from './icons/ChecklistIcon';
import SaveMoreIcon from './icons/SaveMoreIcon';

const steps = [
  {
    icon: BookRelaxIcon,
    title: "Book & relax",
    description: "Let each trip be an inspirational journey, each room a peaceful space"
  },
  {
    icon: ChecklistIcon,
    title: "Smart checklist",
    description: "Let each trip be an inspirational journey, each room a peaceful space"
  },
  {
    icon: SaveMoreIcon,
    title: "Save more",
    description: "Let each trip be an inspirational journey, each room a peaceful space"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-xl text-gray-900">How it work</h2>
          <p className="text-body text-gray-500 max-w-2xl mx-auto">
            Những địa điểm thường đến mà Luxstay
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
          
          {/* Connecting Lines */}
          <div className="absolute top-28 left-1/4 right-1/4 h-px border-t border-dashed border-gray-300 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;