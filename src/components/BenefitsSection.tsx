const benefits = [
  {
    category: "Personalized Service",
    title: "Tailored travel experiences",
    description: "Every journey is crafted specifically for you with no hidden fees or upfront consultation costs",
    color: "text-green-800"
  },
  {
    category: "Global Network",
    title: "Access exclusive destinations worldwide", 
    description: "Tap into our network of luxury hotels, premium experiences, and hidden gems across the globe",
    color: "text-blue-600"
  },
  {
    category: "Peace of Mind",
    title: "Secure and seamless booking",
    description: "24/7 support, comprehensive travel insurance, and secure payment processing for worry-free adventures",
    color: "text-pink-800"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Illustration */}
          <div className="flex-1">
            <img 
              src="/images/benefits-illustration.svg"
              alt="Benefits illustration"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
          
          {/* Right Content */}
          <div className="flex-1 space-y-16">
            {/* Section Header */}
            <div className="space-y-5">
              <p className="text-overline text-gray-400">BENnefits</p>
              <h2 className="heading-xl text-gray-900">Happening cities</h2>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-5">
                  <div className="space-y-3">
                    <span className={`text-caption ${benefit.color} bg-white px-3 py-1 rounded-full inline-block`}>
                      {benefit.category}
                    </span>
                    <h3 className="heading-md text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-small text-gray-500 leading-relaxed max-w-md">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;