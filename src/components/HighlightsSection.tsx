import NextArrowIcon from './icons/NextArrowIcon';

const destinations = [
  {
    name: "New York",
    properties: "188,288 properties",
    image: "/images/destinations/new-york.png"
  },
  {
    name: "Singapore", 
    properties: "188,288 properties",
    image: "/images/destinations/singapore.png"
  },
  {
    name: "Paris",
    properties: "188,288 properties", 
    image: "/images/destinations/paris.png"
  },
  {
    name: "London",
    properties: "188,288 properties",
    image: "/images/destinations/london.png"
  },
  {
    name: "Tokyo",
    properties: "188,288 properties",
    image: "/images/destinations/tokyo.png"
  }
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-xl text-gray-900">Highlights places</h2>
          <p className="text-body text-gray-500 max-w-2xl mx-auto">
            Popular places that Chisfis recommends for you
          </p>
        </div>
        
        {/* Destinations Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="space-y-5">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="heading-sm text-gray-900">{destination.name}</h3>
                    <p className="text-small text-gray-500">{destination.properties}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <NextArrowIcon width={24} height={24} color="#374151" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;