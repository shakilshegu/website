import NextArrowIcon from './icons/NextArrowIcon';

const destinations = [
  {
    name: "Coorg",
    image: "https://images.unsplash.com/photo-1529057299613-a565b7ce93aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Munnar", 
    image: "https://images.unsplash.com/photo-1616388969587-8196f32388b4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Goa", 
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chikmagalur",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mysore",
    image: "https://images.unsplash.com/photo-1579429223126-29d2f6f9c1ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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