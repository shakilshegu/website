const benefits = [
  {
    category: "Advertising",
    title: "Cost-effective advertising",
    description: "With a free listing, you can advertise your rental with no upfront costs",
    color: "text-green-800"
  },
  {
    category: "Exposure",
    title: "Reach millions with Chisfis", 
    description: "Millions of people are searching for unique places to stay around the world",
    color: "text-blue-600"
  },
  {
    category: "Secure",
    title: "Secure and simple",
    description: "A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online",
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