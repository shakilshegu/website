import NextArrowIcon from './icons/NextArrowIcon';

const accommodationTypes = [
  {
    name: "Nature House",
    properties: "188,288 properties",
    image: "/images/accommodations/nature-house.png"
  },
  {
    name: "Wooden house",
    properties: "188,288 properties", 
    image: "/images/accommodations/wooden-house.png"
  },
  {
    name: "Houseboat",
    properties: "188,288 properties",
    image: "/images/accommodations/houseboat.png"
  },
  {
    name: "Farm House",
    properties: "188,288 properties",
    image: "/images/accommodations/farm-house.png"
  },
  {
    name: "Dome House",
    properties: "188,288 properties",
    image: "/images/accommodations/dome-house.png"
  }
];

const AccommodationTypesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="heading-xl text-gray-900">Explore by types of stays</h2>
          <p className="text-body text-gray-500 max-w-2xl">
            Explore houses based on 10 types of stays
          </p>
        </div>
        
        {/* Accommodation Types Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
            {accommodationTypes.map((type, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={type.image}
                      alt={type.name}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 space-y-2">
                    <h3 className="heading-sm text-gray-900">{type.name}</h3>
                    <p className="text-small text-gray-500">{type.properties}</p>
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

export default AccommodationTypesSection;